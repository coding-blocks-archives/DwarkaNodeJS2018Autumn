const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoList = [];
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/', express.static('./public') );

app.get('/todo', (req,res) => {
    todoList.push(req.query.task);
    res.sendStatus(200);
});

app.get('/todoList', (req,res)=> {
  res.send(todoList);
});

app.get('/subject/:id/student/:name', (req,res)=> {
   res.send(req.params);
})
app.post('/delete', (req,res) => {
  let id = req.body.id
  try {
    todoList.splice(id,1);
    res.sendStatus(200);
  }
  catch(e) {
    res.sendStatus(400);
  }

});
app.listen(5000, function(){
    console.log('Server is listening on 5000');
})