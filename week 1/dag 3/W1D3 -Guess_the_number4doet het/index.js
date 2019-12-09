let numberToBeGuessed = null;
let name;
let guess;
let guessNum = 1;
const min = 0;
const max = 25;
let endgame;

while (name === undefined || name === null || name.length === 0) {
  // vraag hier om de naam
  name = prompt("uw naam? ");
}

console.log("Welkom bij Guess the Number " + name + "!!");

// kies hier een random getal
numberToBeGuessed = Math.floor(Math.random() * 10) + 1;
console.log("Pssst het nummer is: " + numberToBeGuessed);

guess = parseInt(prompt("Laten we beginnen, vul uw nummer in"));
//onder welke voorwaarde moeten we blijven loopen?
while (guess !== numberToBeGuessed && guessNum <= 5) {
  console.log("Je gok is:" + guess);
  //alert(typeof guess);
  if (guess > numberToBeGuessed) {
    guess = parseInt(prompt("Je gok was te hoog"));
    guessNum++;
  } else if (guess < numberToBeGuessed) {
    guess = parseInt(prompt("Je gok was te laag"));
    guessNum++;
  } else {
    guess = parseInt(prompt("verkeerde invoer, probeer nog eens"));
  }
}
endgame = function() {
  alert(
    "We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!"
  );
};
if (guess === numberToBeGuessed) {
  alert(
    "Goed geraden, het nummer was inderdaad " +
      guess +
      " geraden in " +
      guessNum
  );
  endgame();
}
