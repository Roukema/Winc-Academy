let passwordLength = Boolean;
let passwordIsNotNull = Boolean;
let password1Uppercase = Boolean;
let password1Lowercase = Boolean;
let password1Number = Boolean;
let passwordHas3Requirements = Boolean;

let passwordVerifierLength = password => {
  if (password.length >= 8) {
    console.log("het wachtwoord mag niet langer zijn dan 8 characters");
    passwordLength = false;
    return false;
  } else {
    passwordLength = true;
    console.log("het wachtwoord is minder dan 8 characters");
    return true;
  }
};
let passwordVerifierIsNotNull = password => {
  if (password == null || password == "") {
    console.log("Probeer het nog eens");
    passwordIsNotNull = false;
    return false;
  } else {
    passwordIsNotNull = true;
    console.log("Er is minstens iets ingevuld");
    return true;
  }
};
let passwordVerifier1Uppercase = password => {
  if (/(?=.*[A-Z])/.test(password)) {
    console.log("Goedzo er is minimaal 1 hoofdletter ingevuld");
    password1Uppercase = true;
    return true;
  } else {
    password1Uppercase = false;
    console.log("Gebruik minimaal 1 Hoofdlettert");
    return false;
  }
};
let passwordVerifier1Lowercase = password => {
  if (/(?=.*[a-z])/.test(password)) {
    console.log("Goedzo er is minimaal 1 kleine letter ingevuld");
    password1Lowercase = true;
    return true;
  } else {
    console.log("Gebruik minimaal 1 kleine letter");
    password1Lowercase = false;
    return false;
  }
};
let passwordVerifier1Number = password => {
  if (/(?=.*[0-9])/.test(password)) {
    password1Number = true;
    console.log("Goedzo er is minimaal 1 nummer ingevuld");
    return true;
  } else {
    password1Number = false;
    console.log("Gebruik minimaal 1 nummer");
    return false;
  }
};
let PasswordRequirementsTrue = Number;
let passwordCountRequirement = () => {
  const passwordRequirements = [
    passwordLength,
    passwordIsNotNull,
    password1Uppercase,
    password1Lowercase,
    password1Number
  ];
  console.log(passwordRequirements);
  return (PasswordRequirementsTrue = passwordRequirements.filter(Boolean)
    .length);
};

let passwordHasMoreThan3Requirements = password => {
  passwordCountRequirement();

  if (PasswordRequirementsTrue >= 3 && password1Lowercase === true) {
    console.log("wachtwoord is oke hollee holleee");
    passwordHas3Requirements = true;
    return true;
  } else {
    passwordHas3Requirements = false;
    console.log(
      "wachtwoord heeft maar ",
      passwordCountRequirement(password),
      " requirements"
    );
    return false;
  }
};

// module.exports = {
//   passwordVerifierLength,
//   passwordVerifierIsNotNull,
//   passwordVerifier1Uppercase,
//   passwordVerifier1Lowercase,
//   passwordVerifier1Number,
//   passwordHasMoreThan3Requirements
// };

// ik ga hier verder om de informatie op de html te krijgen
const createHints = () => {
  const list = document.getElementById("hintList");
  list.innerHTML = "";

  if (passwordLength === false) {
    createListElement(
      "het wachtwoord mag niet langer zijn dan 8 characters",
      false
    );
  } else if (passwordLength === true) {
    createListElement("het wachtwoord is minder dan 8 characters", true);
  }
  if (passwordIsNotNull === true) {
    createListElement("Er is minstens iets ingevuld", true);
  } else if (passwordIsNotNull === false) {
    createListElement("Probeer het nog eens", false);
  }
  if (password1Uppercase === true) {
    createListElement("Goedzo er is minimaal 1 hoofdletter ingevuld", true);
  } else if (password1Uppercase === false) {
    createListElement("GEBRUIK MINIMAAL 1 HOOFDLETTER", false);
  }
  if (password1Lowercase === true) {
    createListElement("Goedzo er is minimaal 1 kleine letter ingevuld", true);
  } else if (password1Lowercase === false) {
    createListElement("Gebruik minimaal 1 kleine letter", false);
  }
  if (password1Number === true) {
    createListElement("Goedzo er is minimaal 1 nummer ingevuld", true);
  } else if (password1Number === false) {
    createListElement("Gebruik minimaal 1 nummer", false);
  }
  if (passwordHas3Requirements === true) {
    document.getElementById("uitslag").className = true;
    document
      .getElementById("uitslag")
      .appendChild(document.createElement("h3")).innerHTML =
      "wachtwoord is oke hollee holleee";
  } else if (passwordHas3Requirements === false) {
    document.getElementById("uitslag").className = false;
  }
};

const createListElement = (tekst, boolean) => {
  // create element
  let listNode = document.createElement("li");

  // change their properties

  listNode.innerHTML = tekst;
  listNode.className = boolean;

  //put elements together
  document.getElementById("hintList").appendChild(listNode);

  return listNode;
};
const addNewPasswordListener = () => {
  const button = document.getElementById("testButton");
  button.addEventListener("click", () => {
    const input = document.getElementById("wachtwoordInput");
    const password = input.value;

    passwordVerifier(password);
    createHints();
  });
};

const passwordVerifier = password => {
  passwordVerifierLength(password),
    passwordVerifierIsNotNull(password),
    passwordVerifier1Uppercase(password),
    passwordVerifier1Lowercase(password),
    passwordVerifier1Number(password),
    passwordHasMoreThan3Requirements(password);
};

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
  addNewPasswordListener();
});
