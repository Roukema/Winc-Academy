/*const age = 16;
const isFemale = false;
const driverStatus = "job";
const name = "jan";
const totalAmount = 24;
*/

const age = 24;
const isFemale = false;
const driverStatus = "bob";
const name = "Sara";
const totalAmount = 90;
/*
const age = 30;
const isFemale = false;
const driverStatus = "Bob";
const name = "Sarah";
const totalAmount = 110;
*/

let ageVerschil = 18 - age;
if (age >= 18) {
  console.log("Welkom in onze kroeg. Geniet maar drink met mate.");
} else {
  console.log(
    "U bent te jong, probeer het over " + ageVerschil + " jaar nog eens"
  );
}
if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Geen korting voor jou, dat zal een duur avondje worden!");
}

if (name == "Sarah" || name == "Abraham" || name == "Bram") {
  console.log("Gefeliciteerd wij zijn 50, dus jij krijgt een biertje!");
} else if (name == "Sara") {
  console.log("Sorry jij komt een letter h te kort, jij krijgt niets gratis.");
} else {
  console.log("Wij zijn jarig maar geven jou (nog) niets!");
}
if (totalAmount >= 100) {
  console.log("U krijgt van ons een flesje champagne erbij!!");
} else if (totalAmount >= 50) {
  console.log("U krijgt een gratis portie Nachos!!");
} else if (totalAmount >= 25) {
  console.log("U krijgt van ons heerlijke (vega)bitterballen!");
} else {
  console.log("Doe niet zo gierig, geeft iets meer uit.");
}

if (isFemale) {
  console.log("U kunt kaartjes kopen voor onze Ladiesnight");
} else {
  console.log(
    "U zult eerst een opperatie moeten ondergaan voor wij u kunnen toelaten, u bent namelijk geen vrouw!"
  );
}

if (driverStatus == "bob" || driverStatus == "Bob") {
  console.log("U mag rijden, u bent namelijk de bob");
} else {
  console.log(
    "wij kunnen een taxi voor u bestellen, u kunt namelijk niet meer rijden. "
  );
}
