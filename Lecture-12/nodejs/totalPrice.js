let minute = require('./minute');
let km = require('./km');

let kilo = process.argv[2];
let min = process.argv[3];

function totalPrice() {
    let minutePrice = minute.getMinPrice(min);
    let kmPrice = km.getKmPrice(kilo);
    return minutePrice + kmPrice;
}

console.log(totalPrice());