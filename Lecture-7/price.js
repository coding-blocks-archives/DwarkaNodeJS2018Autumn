var globule;
var globuleKm;
var globuleMinute;
var globuleTotal;

uberPrice();
function uberPrice(km, minute) {
        
       var priceKm = 0;
       var priceMinute = 0;

		function priceperKm(kilo) {
		   var price = (kilo < 5)?kilo*5:(kilo<10)?(kilo-5)*10 + 25:75 + (kilo - 10)*15;
		   priceKm = price;
		}


		function priceperMinute(time) {
			var price = (time < 5)?0: (time<10)? (time - 5)*5 :(time-10)*7 + 25;
			 priceMinute = price;
		}
        
        function totalPrice() {
        	globule = priceKm + priceMinute;
        	return globule;
        }

        globuleKm = priceperKm;
        globuleMinute = priceperMinute;
        globuleTotal = totalPrice;
    
}


globuleKm(10);
globuleMinute(14);
console.log('DO 1000 tasks');
console.log(globuleTotal());