function add(x,y, cb) {
	var z = x + y;
    cb(z);
}

function performOperation(number, callback) {
	add(2,3,function(data){
       callback(number * data);
	})
}

performOperation(6, function(data){
   console.log(data);
});