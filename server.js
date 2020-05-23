var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);
// Pass a http.Server instance to the listen method
var io = require('socket.io').listen(server);

// The server should start listening
server.listen(8081);


// Handle connection
io.on('connection', function (socket) {
    console.log("Connected succesfully to the socket ...");

    socket.emit('connected',{ hello: 'word'})
    socket.on('chat', function (data) {
        console.log(data);
    });
    socket.on('disconnect', () => {
        io.emit('user disconnected');
    });
});