const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];

const findSpiderMan = function(object) {
  return object.name === "Spiderman";
};

console.log(superheroes.find(findSpiderMan));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}
// const superheroes = [
//     { name: "Batman", alter_ego: "Bruce Wayne" },
//     { name: "Superman", alter_ego: "Clark Kent" },
//     { name: "Spiderman", alter_ego: "Peter Parker" }
//   ];

//   const findSpiderMan = function(object) {
//       return object.find(function(superhero){
//           return superhero.name === "Spiderman";
//       })

//   };
//   console.log("Found Spiderman: "findSpiderMan(superheroes))

const doubleArrayValues = function(array) {
  let newArray = [];
  array.forEach(element => {
    newArray.push(element * 2);
  });
  return newArray;
};

console.log(doubleArrayValues([1, 2, 3]));

// result should be [2, 4, 6]

const containsNumberBiggerThan10 = function(array) {
  return array.some(number => {
    return number > 10;
  });
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true

// const isItalyInTheGreat7 = function(array) {
//   return array.some(element => {
//     element === "Italy";
//     console.log(element.typeof);
//   });
// };
function isItalyInTheGreat7(array) {
  return array.some(country => {
    return country === "Italy";
  });
}

console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States"
  ])
);
// result should be true

const tenfold = function(array) {
  return array.map(x => x * 10);
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

const isBelow100 = array => {
  return array.every(element => {
    return element < 100;
  });
};

console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 102, 11, 77, 84, 98])
);
// result should be: false

const bigSum = array => {
  return array.reduce((numA, numB) => {
    return numA + numB;
  });
};
console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
