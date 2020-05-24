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
        socket.broadcast.emit('broadcast', data);
    });
    socket.on('nickname', function (data) {
        // emit old and new username for replace reference
        socket.broadcast.emit('nickname', data);
    });
    socket.on('disconnect', function(){
        users--;
        usersList.splice(usersList.indexOf(socket.id), 1);
        socket.broadcast.emit('quit', {id:socket.id, users: usersList})
    })

    socket.on('connected', function(){
        console.log('socket connected')
    })

    usersList.push(socket.id)
    users++;
    io.emit('newcomer', {id:socket.id, users: usersList})
    io.emit('connected', {id: socket.id, users: usersList} );
});