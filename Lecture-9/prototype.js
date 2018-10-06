function setData(name, email) {
   this.name = name;
   this.email = email
}


setData.prototype.update = function(name) {
	this.name = name
}

setData.prototype.display = function() {
   console.log(this.name);
}

var data = new setData('aayush', '123@gmail.com');
var main = new setData('aa', '13@gmail.com');

data.update('Ravikant');
data.display();
main.update('Kishore');
main.display();