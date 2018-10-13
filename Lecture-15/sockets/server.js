const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io');
const socket = io(http);

app.use(express.static('public'));

socket.on('connection', function(conn){
  console.log(conn.id);
  conn.on('superman', function(data){
    conn.broadcast.emit('message', data );
  })
})

http.listen(5000, function(){
    console.log('Server is running')
})