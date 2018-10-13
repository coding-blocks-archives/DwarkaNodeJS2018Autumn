const db = require('mongodb');
const url = 'mongodb://localhost:27017';

function connect() {
    db.connect(url, function(err, client){
        console.log("Connected successfully to server");
    })
    
} 

module.exports = {
    connect
}
