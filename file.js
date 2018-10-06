const file = require('fs');

file.writeFile('index.txt', "Bye World", function(err) {
    if(err) throw err;
    file.readFile('index.txt', function(err,data){
        if(err) throw err;
        console.log(data.toString());
    })
})

