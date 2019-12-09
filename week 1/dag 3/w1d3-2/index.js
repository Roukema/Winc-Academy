/*
broodjeKaas 
  "neem een boterham";
  "neem een plak kaas";
  "neem nog een boterham";
*/
const broodjeKaas = function() {
  console.log("neem een boterham");
  console.log("neem een plak kaas");
  console.log("neem nog een boterham");
};
broodjeKaas();

// brood met beleg
const makeSandwich = function(topping) {
  console.log("hier heb u een broodje " + topping);
};
makeSandwich("ham");

// discount
let calculateDiscountedPrice = function(totalAmount, discount) {
  return totalAmount - discount;
};
console.log(Math.round(calculateDiscountedPrice(15, 5)));

//minimaal 25 euro en herschreven
let calculateDiscountedPrice25 = function(totalAmount, discount) {
  if (totalAmount >= 25) {
    return totalAmount - discount;
  } else {
    return totalAmount;
  }
};
console.log(Math.round(calculateDiscountedPrice25(15.6, 5.15)));
