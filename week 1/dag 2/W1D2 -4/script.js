const age = 16;
let ageVerschil = 18 - age;
if (age >= 18) {
  console.log("Welkom in onze kroeg. Geniet maar drink met mate.");
} else {
  console.log(
    "U bent te jong, probeer het over " + ageVerschil + " jaar nog eens"
  );
}

const isFemale = false;
if (isFemale) {
  console.log("U kunt kaartjes kopen voor onze Ladiesnight");
} else {
  console.log(
    "U zult eerst een opperatie moeten ondergaan voor wij u kunnen toelaten, u bent namelijk geen vrouw!"
  );
}

const driverStatus = "job";
if (driverStatus == "bob" || driverStatus == "Bob") {
  console.log("U mag rijden, u bent namelijk de bob");
} else {
  console.log(
    "wij kunnen een taxi voor u bestellen, u kunt namelijk niet meer rijden. "
  );
}
