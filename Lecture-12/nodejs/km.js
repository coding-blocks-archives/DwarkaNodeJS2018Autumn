function getKmPrice(km) {
  var price = km<5? km*5: (km-5)*10 + 25;
  return price;
}

module.exports = {
    getKmPrice: getKmPrice
}