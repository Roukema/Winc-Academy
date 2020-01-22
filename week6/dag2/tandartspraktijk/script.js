const data = {
  dentists: [
    {
      id: 1,
      name: "joost",
      surname: "tandjes",
      tel: 06 - 12345678,
      mail: "tandje@tandjes.nl",
      sick: false
    },
    {
      id: 2,
      name: "jaap",
      surname: "tandjes",
      tel: 06 - 12345678,
      mail: "tandje@tandjes.nl",
      sick: false
    },
    {
      id: 3,
      name: "jannes",
      surname: "tandjes",
      tel: 06 - 12345678,
      mail: "tandje@tandjes.nl",
      sick: false
    },
    {
      id: 4,
      name: "jip",
      surname: "tandjes",
      tel: "0612345678",
      mail: "tandje@tandjes.nl",
      sick: false
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
      day: "maandag",
      time: "9:00",
      namePatient: "tandjeverwijderd",
      nameDentist: "joost tandjes",
      nameAssistent: "tandjehelper"
    },
    {
      id: "2",
      day: "maandag",
      time: "9:00",
      namePatient: "tandjeweg",
      nameDentist: "joost tandjes",
      nameAssistent: "tandjehelper"
    },
    {
      id: "3",
      day: "maandag",
      time: "9:00",
      namePatient: "tandjeweg",
      nameDentist: "joost tandjes",
      nameAssistent: "tandjehelper"
    },
    {
      id: "4",
      day: "maandag",
      time: "9:00",
      namePatient: "tandjeweg",
      nameDentist: "joost tandjes",
      nameAssistent: "tandjehelper"
    }
  ]
};
let newData = { ...data };
const updateDentistName = (data, id, newName) => {
  // copy the old state
  newData["dentists"] = [...data["dentists"]];
  const index = data["dentists"].findIndex(dentist => dentist["id"] === id);
  const newDentist = { ...data["dentists"][index] };

  // update the new state
  newDentist["name"] = newName;
  newData["dentists"][index] = newDentist;

  // return the new state
  return newData;
};
const denstistIsSick = (newData, dentistName, newSick) => {
  // copy the old stat
  const index = newData["dentists"].findIndex(
    dentist => dentist["name"] === dentistName
  );
  const newDentist = { ...newData["dentists"][index] };

  // update the new state
  newDentist["sick"] = newSick;
  newData["dentists"][index] = newDentist;

  // return the new state
  return newData;
};

newData = updateDentistName(data, 1, "Jaap");
// console.log("oude data", data);
// console.log("nieuwe data is:");
// console.log(newData);

const addDentist = (data, newName, newSurname, newTel, newMail) => {
  // copy the old state
  const newId = data["dentists"].length + 1;

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

const addAppointment = (day, time, namePatient, nameDentist, nameAssistent) => {
  // copy the old state

  const newId = newData["appointments"].length + 1;

  newData["appointments"] = [...newData["appointments"]];

  const newAppointment = {
    id: newId,
    day: day,
    time: time,
    namePatient: namePatient,
    nameDentist: nameDentist,
    nameAssistent: nameAssistent
  };

  // update the new state

  newData["appointments"].push(newAppointment);
  // console.log("zijn er 50 act", newData);
  // return the new state
  return newData;
};
// 50 random appointment to start with

const getRandomPatient = () => {
  const person = data["patients"][Math.floor(Math.random() * 4)];
  return `${person.name} ${person.surname}`;
};
const getRandomDentist = () => {
  const person = data["dentists"][Math.floor(Math.random() * 4)];
  return `${person.name} ${person.surname}`;
};
const getRandomAssistent = () => {
  const person = data["assistants"][Math.floor(Math.random() * 2)];
  return `${person.name} ${person.surname}`;
};
const getRandomDay = () => {
  const days = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
  const randomDay = days[Math.floor(Math.random() * 5)];
  return randomDay;
};

const getRandomTime = () => {
  let goodTime = false;
  let hour;
  while (goodTime === false) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      goodTime = true;
    }
  }
  return `${hour}:00u`;
};

const make50Appointments = () => {
  for (i = 0; i < 50; i++) {
    addAppointment(
      getRandomDay(),
      getRandomTime(),
      getRandomPatient(),
      getRandomDentist(),
      getRandomAssistent()
    );
  }
};
const addNewAppointment = (
  day,
  time,
  namePatient,
  nameDentist,
  nameAssistent
) => {
  const appointments = newData["appointments"];
  // console.log(appointments[0]["nameDentist"], " : ", nameDentist);
  // console.log(appointments[0]["day"], " : ", day);
  // console.log(appointments[0]["time"], " : ", time);
  if (
    nameDentist === appointments[0]["nameDentist"] &&
    day === appointments[0]["day"] &&
    time === appointments[0]["time"]
  ) {
    alert("Tijd al bezet");
  } else {
    addAppointment(day, time, namePatient, nameDentist, nameAssistent);
  }
};

// console.log(data);
// console.log("nieuwe data is:");
// console.log(newData);

// console.log("appointments", data["appointments"]);

//

//maakt een list object
const addAppointmentContainer = async data => {
  let listnode = document.createElement("li");
  let timenode = document.createElement("p");
  let patientnode = document.createElement("p");
  let dentistnode = document.createElement("p");
  let assistentnode = document.createElement("p");
  //change their properties
  const fliterName = dentist => {
    // console.log(
    //   data["nameDentist"],
    //   dentist["name"] + " " + dentist["surname"]
    // );
    if (dentist["name"] + " " + dentist["surname"] == data["nameDentist"]) {
      return dentist;
    }
  };
  const dentistInfo = newData["dentists"].filter(fliterName);
  if (dentistInfo[0]["sick"] === true) {
    listnode.className = "appointmentCanceled";
  } else {
    listnode.className = "appointment";
  }

  timenode.className = "time";
  patientnode.className = "patient";
  dentistnode.className = "dentist";
  assistentnode.className = "assistent";

  timenode.innerHTML = data["time"];
  patientnode.innerHTML = data["namePatient"];
  dentistnode.innerHTML = data["nameDentist"];
  assistentnode.innerHTML = data["nameAssistent"];

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
    // console.log("hallo Element:", element);
  });

  //add listener to button, checkbutton
  // addCheckboxChangeListener();
};
const removeAppointment = (data, appointmentId) => {
  // copy the old state

  data["appointments"] = [...data["appointments"]];

  console.log(data["appointments"]);
  newData = data["appointments"].filter(item => item.id != appointmentId);
  console.log("data na filter", newData);
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
newData = denstistIsSick(data, "joost", true);
addNewAppointment(
  "maandag",
  "9:00",
  "eigenlijk wil ik niet",
  "joost tandjes",
  "doet ertoe"
);
removeAppointment(newData, 1);
make50Appointments();
addAppointmentToDom(newData["appointments"]);

const addToDom = () => {};

document.addEventListener("DOMContentLoaded", addToDom);
