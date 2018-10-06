var count = 6;
var globule;

getPizza();
function getPizza() {
  var username = 'aayush';
  var password = '1234';
  var m = 'random';
  function countPizzas() {
 
    // console.log(username, password);
    return function(){
    	return function() {
    		return username;
    	};
    }
  }	
  globule = countPizzas()()();
  // console.log(globule === countPizzas);

}

//??
//console.log(username);
//console.log(orderPizza());

function orderPizza() {

  console.log(globule);
}

orderPizza();


function checkScope() {
	const username = 'Monkey';
	if(true) {
	 username = 'Donkey'
      
	}
	console.log(username);
}
checkScope();