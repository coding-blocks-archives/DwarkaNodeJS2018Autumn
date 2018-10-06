const express = require('express');
const app = express();
const todoList = [];
app.use('/', express.static('./public') );

app.get('/todo', (req,res) => {
    todoList.push(req.query.task);
    res.sendStatus(200);
});

app.get('/todoList', (req,res)=> {
  res.send(todoList);
});

app.listen(5000, function(){
    console.log('Server is listening on 5000');
})