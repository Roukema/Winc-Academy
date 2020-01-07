const calculateDogAge = function(age, yourAge) {
  let dogAge = age / 7;
  let dogAge2 = dogAge.toFixed(2);
  let humanAge = yourAge * 7;
  console.log(
    "Your doggie is " +
      dogAge2 +
      " years old in dog years! You are " +
      humanAge +
      " in dog years"
  );
};
calculateDogAge(2, 27);
calculateDogAge(13, 77);
calculateDogAge(3, 13);
