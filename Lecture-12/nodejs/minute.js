function getMinPrice(min) {
    var price = min<5? min*2: (min-5)*3 + 10;
    return price;
  }
  
  module.exports = {
      getMinPrice: getMinPrice
  }