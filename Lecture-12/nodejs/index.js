var x = 2;

var y = 2;

var z = x + y;

//console.log(z);

function hello() {
	return z;
}

console.log('3' + hello());

module.exports = {
	variable: z
}