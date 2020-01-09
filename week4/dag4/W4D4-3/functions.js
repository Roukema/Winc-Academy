const passwordVerifierLength = password => {
  if (password.length >= 8) {
    console.log("het wachtwoord mag niet langer zijn dan 8 characters");
    return false;
  } else {
    console.log("het wachtwoord is minder dan 8 characters");
    return true;
  }
};
const passwordVerifierIsNotNull = password => {
  if (password === null) {
    console.log("Probeer het nog eens");
    return false;
  } else {
    console.log("Er is minstens iets ingevuld");
    return true;
  }
};
const passwordVerifier1Uppercase = password => {
  if (/(?=.*[A-Z])/.test(password)) {
    console.log("Goedzo er is minimaal 1 hoofdletter ingevuld");
    return true;
  } else {
    console.log("Gebruik minimaal 1 Hoofdlettert");
    return false;
  }
};
const passwordVerifier1Lowercase = password => {
  if (/(?=.*[a-z])/.test(password)) {
    console.log("Goedzo er is minimaal 1 kleine letter ingevuld");
    return true;
  } else {
    console.log("Gebruik minimaal 1 kleine letter");
    return false;
  }
};
const passwordVerifier1Number = password => {
  if (/(?=.*[0-9])/.test(password)) {
    console.log("Goedzo er is minimaal 1 nummer ingevuld");
    return true;
  } else {
    console.log("Gebruik minimaal 1 nummer");
    return false;
  }
};

const passwordCountRequirement = x => {
  const passwordRequirements = [
    passwordVerifierLength(x),
    passwordVerifierIsNotNull(x),
    passwordVerifier1Uppercase(x),
    passwordVerifier1Lowercase(x),
    passwordVerifier1Number(x)
  ];

  return passwordRequirements.reduce((acc, cur) => acc + cur);
};
const passwordHasMoreThan3Requirements = password => {
  if (
    passwordCountRequirement(password) >= 3 &&
    passwordVerifier1Lowercase(password) === true
  ) {
    console.log("wachtwoord is oke hollee holleee");
    return true;
  } else {
    console.log(
      "wachtwoord heeft maar ",
      passwordCountRequirement(password),
      " requirements"
    );
    return false;
  }
};

module.exports = {
  passwordVerifierLength,
  passwordVerifierIsNotNull,
  passwordVerifier1Uppercase,
  passwordVerifier1Lowercase,
  passwordVerifier1Number,
  passwordHasMoreThan3Requirements
};
