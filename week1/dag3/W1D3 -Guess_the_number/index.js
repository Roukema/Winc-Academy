//genereer een willekeurige getal
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
let getalpc = getRandomInt(25);
console.log(getalpc);

// input vragen;
let name = prompt(
  "Welkom bij mijn Guess the number game \n Wat is uw naam",
  "typ hier uw naam"
);

let number = function inputnum() {
  parseInt(
    prompt("welk getal denkt u dat het is??", "een getal tussen 1 -25 "),
    10
  );
};

number();

console.log(number);
//vergelijken

function compareNum() {
  if (number === getalpc) {
    alert(
      "Gefeliciteerd " +
        name +
        ", u hebt het juiste nummer geraden!!\n Het nummer was namelijk " +
        getalpc
    );
  } else {
    alert(
      "Helaas " +
        name +
        ", u heeft het nummer niet geraden\n Het nummer was " +
        getalpc
    );
  }
}
compareNum();

function herhaal() {
  for (input = 0; input !== getalpc; input++) {
    number();
    compareNum();
  }
}
herhaal();
