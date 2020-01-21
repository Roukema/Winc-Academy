const data = {
  dentists: [
    {
      id: 1,
      name: "joost",
      surname: "tandjes",
      tel: 06 - 12345678,
      mail: "tandje@tandjes.nl"
    },
    {
      id: 2,
      name: "jaap",
      surname: "tandjes",
      tel: 06 - 12345678,
      mail: "tandje@tandjes.nl"
    },
    {
      id: 3,
      name: "jannes",
      surname: "tandjes",
      tel: 06 - 12345678,
      mail: "tandje@tandjes.nl"
    },
    {
      id: 4,
      name: "jip",
      surname: "tandjes",
      tel: "0612345678",
      mail: "tandje@tandjes.nl"
    }
  ],
  assistants: [
    {
      id: 1,
      name: "vrouwvanjoost",
      surname: "tandjes",
      tel: 06 - 12345678,
      mail: "tandje@tandjes.nl"
    },
    {
      id: 2,
      name: "janneke",
      surname: "tandjes",
      tel: 06 - 12345678,
      mail: "tandje@tandjes.nl"
    }
  ],
  patients: [
    {
      name: "Aad",
      surname: "Groen",
      gender: "male",
      region: "Netherlands"
    },
    {
      name: "Harm van der",
      surname: "Pol",
      gender: "male",
      region: "Netherlands"
    },
    {
      name: "Pieter",
      surname: "Meijer",
      gender: "male",
      region: "Netherlands"
    },
    {
      name: "Michiel",
      surname: "Gerritsen",
      gender: "male",
      region: "Netherlands"
    }
  ],
  appointments: [
    {
      id: "1",
      day: "monday",
      time: "9:00",
      namePatient: "tandjeweg",
      nameDentist: "tandjetrekker",
      nameAssistent: "tandjehelper"
    },
    {
      id: "2",
      day: "monday",
      time: "9:00",
      namePatient: "tandjeweg",
      nameDentist: "tandjetrekker",
      nameAssistent: "tandjehelper"
    },
    {
      id: "3",
      day: "monday",
      time: "9:00",
      namePatient: "tandjeweg",
      nameDentist: "tandjetrekker",
      nameAssistent: "tandjehelper"
    },
    {
      id: "4",
      day: "monday",
      time: "9:00",
      namePatient: "tandjeweg",
      nameDentist: "tandjetrekker",
      nameAssistent: "tandjehelper"
    }
  ]
};

const updateDentistName = (data, id, newName) => {
  // copy the old state
  const newData = { ...data };
  newData["dentists"] = [...data["dentists"]];
  const index = data["dentists"].findIndex(dentist => dentist["id"] === id);
  const newDentist = { ...data["dentists"][index] };

  // update the new state
  newDentist["name"] = newName;
  newData["dentists"][index] = newDentist;

  // return the new state
  return newData;
};

let newData = updateDentistName(data, 1, "Jaap");
console.log("oude data", data);
console.log("nieuwe data is:");
console.log(newData);

const addDentist = (data, newName, newSurname, newTel, newMail) => {
  // copy the old state
  const newId = data["dentists"].length + 1;
  let newData = { ...data };

  newData["dentists"] = [...data["dentists"]];
  const newDentist = {
    id: newId,
    name: newName,
    surname: newSurname,
    tel: newTel,
    mail: newMail
  };

  // update the new state

  newData["dentists"].push(newDentist);

  // return the new state
  return newData;
};
const addPatient = (data, newName, newSurname, newTel, newMail, newYear) => {
  // copy the old state
  const newId = data["patients"].length + 1;
  let newData = { ...data };

  newData["patients"] = [...data["patients"]];
  const newPatient = {
    id: newId,
    name: newName,
    surname: newSurname,
    tel: newTel,
    mail: newMail,
    year: newYear
  };

  // update the new state

  newData["patients"].push(newPatient);

  // return the new state
  return newData;
};

// newData = updateDentistName(data, 1, "Jaap");
newData = addDentist(
  data,
  "Toos",
  "Trekker",
  "06-12345678",
  "toos@tandartspraktijkbvt.nl"
);
newData = addPatient(
  data,
  "koos",
  "Trekkerloos",
  "06-12345678",
  "toos@tandartspraktijkbvt.nl",
  "1993"
);
console.log(data);
console.log("nieuwe data is:");
console.log(newData);

console.log("appointments", data["appointments"]);

//

//maakt een list object
const addAppointmentContainer = async data => {
  let listnode = document.createElement("li");
  let timenode = document.createElement("p");
  let patientnode = document.createElement("p");
  let dentistnode = document.createElement("p");
  let assistentnode = document.createElement("p");
  //change their properties

  listnode.className = "appointment";
  timenode.className = "time";
  patientnode.className = "patient";
  dentistnode.className = "dentist";
  assistentnode.className = "assistent";

  timenode.innerHTML = data["time"];
  patientnode.innerHTML = data["namePatient"];
  dentistnode.innerHTML = data["nameDentist"];
  assistentnode.innerHTML = data["nameAssistent"];

  //   console.log(data.done);
  // if (data.dentist.sick === true) {
  //   checkBoxnode.classname = true;
  // } else {
  //   checkBoxnode.checked = false;
  // }
  listnode.innerHTML +=
    timenode.outerHTML +
    patientnode.outerHTML +
    dentistnode.outerHTML +
    assistentnode.outerHTML;
  document.getElementsByClassName("dayview")[0].appendChild(listnode);

  return listnode;
};

// stuurt array naar de list
const addAppointmentToDom = async appointments => {
  await appointments.forEach(async element => {
    await addAppointmentContainer(element);
    console.log("hallo Element:", element);
  });

  //add listener to button, checkbutton
  // addCheckboxChangeListener();
};

const addToDom = () => {
  addAppointmentToDom(data["appointments"]);
};

document.addEventListener("DOMContentLoaded", addToDom);
