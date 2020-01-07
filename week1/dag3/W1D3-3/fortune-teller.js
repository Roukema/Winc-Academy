const tellFortune = function(numChild, namePartner, location, job) {
  console.log(
    "You will be a " +
      job +
      " in " +
      location +
      ", and married to " +
      namePartner +
      " with " +
      numChild +
      " kids."
  );
};

tellFortune(2, "Matthijs", "Rotterdam", "Front-End-Developer");
tellFortune(12, "Esther", "Vrouwenpolder", "KroegBaas");
tellFortune(3, "Anne", "Leiden", "Lawyer");
