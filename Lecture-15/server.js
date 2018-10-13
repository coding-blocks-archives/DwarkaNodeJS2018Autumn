const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const todoList = [];
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/', express.static('./public') );

app.get('/todo', (req,res) => {
    todoList.push(req.query.task);
    db.insertOne({
        todo: req.query.task
    }, function(data){
        console.log(data);
        res.sendStatus(200);
    })
    
});

app.get('/todoList', (req,res)=> {
  db.findOne(function(data){
      res.send(data);
  })
});



app.listen(5000, function(){
    console.log("Running on server 5000");
    db.connect();
})