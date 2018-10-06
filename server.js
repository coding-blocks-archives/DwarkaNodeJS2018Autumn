const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('HellO wORLD');
});

app.get('/student', (req,res) => {
    console.log(req.query)
    res.send("Name of student is " + req.query.name + ' and rollno is ' + req.query.rollno);
});

app.listen(5000, function(){
    console.log('Server is listening on 5000');
})