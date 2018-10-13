const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'shoppingCart';
let database = '';

function connect() {
    mongoClient.connect(url, function(err, client){
       //client =  cl;
           database =  client.db(dbName);
    })
}

function insertOne(task, callback) {
    let cart = database.collection('shopping');
    cart.insertOne(task, function(err, data){
        if (err) throw err;
        callback(data);
    })
}

function findOne(callback) {
    let cart = database.collection('shopping');
    cart.find({}).toArray(function(err, data){
        if (err) throw err;
        callback(data);
    })
}

module.exports = {
    connect,
    insertOne,
    findOne
   
}