var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);
var users = 0;
var usersList = [];
server.listen(8081);

io.on('connection', function (socket) {
    //console.log("Connected successfully to the socket ...");

    socket.on('chat', function (data) {
        socket.broadcast.emit('message', data);
    });
    socket.on('broadcast', function (data, fn) {
        // emit old and new username for replace reference
        socket.broadcast.emit('message', { payload:{ ...data, notification: 'user'}} );
        fn({payload: data})
    });
    socket.on('disconnect', function(){
        users--;
        usersList.splice(usersList.indexOf(socket.id), 1);
        //socket.broadcast.emit('quit', {payload:{userid:socket.id, users: usersList}})
        io.emit('message', {payload:{ userid:socket.id, users: usersList, notification: 'system', type:'quit'} })
    })

    socket.on('connected', function(){
        console.log('socket connected')
    })

    usersList.push(socket.id)
    users++;
    io.emit('message', {payload:{userid:socket.id, users: usersList, notification: 'system', type: 'join'}})
    io.emit('connected', {payload:{userid: socket.id, users: usersList}} );
    console.log(usersList)
});