// const bier = ["heineken", "dommelsch", "hertog", "appelsap"];
// const geenArray = "geen array";

// const isArray = function(input) {
//     return Array.isArray(input);

// const waarde = isArray()

//A
const isArray = function(input) {
  return Array.isArray(input);
};
console.log(isArray("Winc Winc, nudge nudge")); // false
console.log(isArray([1, 2, 4, 0])); // true
//

//B
const amountOfElementsInArray = function(array) {
  return array.length;
};
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));

//C
const selectBelgiumFromBenelux = function(array) {
  return array[0];
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

// D
const lastElementInArray = function(array) {
  return array.slice(-1);
};

const dieren = ["Haas", "Cavia", "Kip", "Schildpad"];

console.log(lastElementInArray(dieren));
// E
const dierenSlice = function(array) {
  return array.slice(1);
};
// const dierenSPlice = function(array) {
//   return array.splice(1);
// };
console.log(dierenSlice(dieren));
// console.log(dierenSPlice(dieren));

console.log(dieren);

const stringsTogether = function(array) {
  return array.join(" ");
};
console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));

const combineArrays = function(array1, array2) {
  return array1.concat(array2);
};
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
