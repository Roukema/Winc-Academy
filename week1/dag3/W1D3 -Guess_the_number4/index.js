let numberToBeGuessed = null;
let name;
let guess;
let guessNum = 1;

let endgame;
let nieuwerond;

while (name === undefined || name === null || name.length === 0) {
  // vraag hier om de naam
  name = prompt("uw naam? ");
}

console.log("Welkom bij Guess the Number " + name + "!!");

nieuwerond = function() {
  // kies hier een random getal

  let chooseNum = function(min, max) {
    let min;
    let max;
    min = parseInt(prompt("bepaal de range voer het minimale nummer in:"));
    max = parseInt(prompt("bepaal de range voer het maximale nummer in:"));
    chooseNum();
    numberToBeGuessed = Math.floor(Math.random() * (+max - +min) + min);
  };

  console.log("Pssst het nummer is: " + numberToBeGuessed);
  console.log(min);
  console.log(max);
  guess = parseInt(
    prompt(
      "Welkom bij Guess the Number " +
        name +
        "!!\nLaten we beginnen, vul uw nummer in"
    )
  );
  //onder welke voorwaarde moeten we blijven loopen?
  while (guess !== numberToBeGuessed && guessNum < 5) {
    console.log("Je gok is:" + guess);
    //alert(typeof guess);
    if (guess > numberToBeGuessed) {
      guess = parseInt(
        prompt("Je gok was te hoog \n nog " + (5 - guessNum) + " kansen over!")
      );
      guessNum++;
    } else if (guess < numberToBeGuessed) {
      guess = parseInt(
        prompt("Je gok was te laag\n nog " + (5 - guessNum) + " kansen over!")
      );
      guessNum++;
    } else {
      guess = parseInt(prompt("verkeerde invoer, probeer nog eens"));
    }
  }
  endgame = function() {
    if (
      confirm(
        "We sluiten de game af. Bedankt voor het spelen, tot de volgende keer! \n Of nog een keertje spelen? "
      )
    ) {
      guessNum = 1;
      nieuwerond();
    } else {
      alert("oke tot ziens");
    }
  };
  if (guess === numberToBeGuessed) {
    alert(
      "Goed geraden" +
        name +
        ", het nummer was inderdaad " +
        guess +
        " geraden in " +
        guessNum
    );
    endgame();
  } else if (guessNum === 5) {
    alert("Helaas " + name + " te vaak geraden!");
    endgame();
  }
};
nieuwerond();
