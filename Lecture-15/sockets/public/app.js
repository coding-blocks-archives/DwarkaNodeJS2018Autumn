$(document).ready(function(){
    var socket = io();
    var btn = $('#btn');
    var result = $('#result');

    btn.click(function(){
        let val = $('#inp').val();
        socket.emit('superman', val);
    })
   
    socket.on('message', function(data){
        result.append(data);
    })
})