const calcCircumfrence = function(radius) {
  let circum = 2 * Math.PI * radius;
  let rcircum = circum.toFixed(2);
  console.log("The cirumference is " + rcircum);
};
const calcArea = function(radius) {
  let Area = Math.PI * (radius ^ 2);
  let rArea = Area.toFixed(2);
  console.log("The area is " + rArea);
};

const maten = function(radius) {
  return calcCircumfrence(radius) + "\n" + calcArea(radius);
};
maten(6);
