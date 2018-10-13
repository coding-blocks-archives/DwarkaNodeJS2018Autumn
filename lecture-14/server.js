const express = require('express');
const app = express();
const mongo = require('./db');

app.listen(5000, function(){
    console.log('Running on port 5000');
    mongo.connect();
})

