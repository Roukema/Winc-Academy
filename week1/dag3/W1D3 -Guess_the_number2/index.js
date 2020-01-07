/*const randomNum = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
randomNum(1, 3);*/

const randomNum = Math.floor(Math.random() * 3);
//const name = prompt("uw naam? ");
inGuess = prompt("vul uw nummer in");

let guess = parseInt(inGuess);

// variable
let guessNum = 0;

let checkGuess = function check() {
  while (guess !== randomNum) {
    if (guess === randomNum) {
      console.log("goedzo");
    } else if (guess !== randomNum) {
      console.log("Probeer nog eens " + (5 - (guessNum + 1)));
      inGuess = prompt("probeer het nog eens");
      guess = parseInt(inGuess);
      guessNum++;
      if (guessNum >= 5) break;
      {
      }
    }
  }
};
checkGuess();

let endgame = function thanks(name) {
  console.log("bedankt" + name);
};

console.log(guess);
console.log(randomNum);
