let navbar = document.querySelector(".navbar ul");

const openMenu = function() {
  let hamburgerButton = document.querySelector(".hamburgerButton");

  // hieronder het kliksysteem, maar heb het hoversyteem aan gelaten.
  //   hamburgerButton.onclick = function() {
  //     if (navbar.style.visibility === "hidden") {
  //       return (navbar.style.visibility = "visible");
  //     } else {
  //       return (navbar.style.visibility = "hidden");
  //     }
  //   };

  (hamburgerButton.onmousemove = function() {
    return (navbar.style.visibility = "visible");
  }),
    (hamburgerButton.onmouseout = function() {
      return (navbar.style.visibility = "hidden");
    });
};

// ))
const changeColor = function() {
  let button1 = document.querySelector("#button1");
  let button2 = document.querySelector("#button2");
  let button3 = document.querySelector("#button3");
  let button4 = document.querySelector("#button4");
  let button5 = document.querySelector("#button5");
  let body = document.querySelector(".body");
  let radio1 = document.querySelector("#radio1");
  let radio2 = document.querySelector("#radio2");
  let radio3 = document.querySelector("#radio3");
  let radio4 = document.querySelector("#radio4");
  let radio5 = document.querySelector("#radio5");
  let tekst = document.querySelector(".tekst");

  button1.onclick = function() {
    return (
      (body.style.backgroundColor = "#cccccc"),
      (navbar.style.visibility = "hidden"),
      (radio1.checked = true),
      (radio2.checked = false),
      (radio3.checked = false),
      (radio4.checked = false),
      (radio5.checked = false),
      (tekst.innerHTML = "Grijs")
    );
  };
  button2.onclick = function() {
    return (
      (body.style.backgroundColor = "red"),
      (navbar.style.visibility = "hidden"),
      (radio1.checked = false),
      (radio2.checked = true),
      (radio3.checked = false),
      (radio4.checked = false),
      (radio5.checked = false),
      (tekst.innerHTML = "Rood")
    );
  };
  button3.onclick = function() {
    return (
      (body.style.backgroundColor = "blue"),
      (navbar.style.visibility = "hidden"),
      (radio1.checked = false),
      (radio2.checked = false),
      (radio3.checked = true),
      (radio4.checked = false),
      (radio5.checked = false),
      (tekst.innerHTML = "Blauw")
    );
  };
  button4.onclick = function() {
    return (
      (body.style.backgroundColor = "green"),
      (navbar.style.visibility = "hidden"),
      (radio1.checked = false),
      (radio2.checked = false),
      (radio3.checked = false),
      (radio4.checked = true),
      (radio5.checked = false),
      (tekst.innerHTML = "Groen")
    );
  };
  button5.onclick = function() {
    return (
      (body.style.backgroundColor = "yellow"),
      (navbar.style.visibility = "hidden"),
      (radio1.checked = false),
      (radio2.checked = false),
      (radio3.checked = false),
      (radio4.checked = false),
      (radio5.checked = true),
      (tekst.innerHTML = "Geel")
    );
  };
};
/// keydown toetsen
document.addEventListener("keydown", function(inputKey) {
  let key = inputKey.which;
  if (key == 49) {
    button1.onclick(true);
  } else if (key == 50) {
    button2.onclick(true);
  } else if (key == 51) {
    button3.onclick(true);
  } else if (key == 52) {
    button4.onclick(true);
  } else if (key == 53) {
    button5.onclick(true);
    //pijltoetsen proberen pijltoetsen verder
  } else if (key === 37 || key === 38) {
    if (radio1.checked == true) {
      button5.onclick(true);
    } else if (radio2.checked == true) {
      button1.onclick(true);
    } else if (radio3.checked == true) {
      button2.onclick(true);
    } else if (radio4.checked == true) {
      button3.onclick(true);
    } else if (radio5.checked == true) {
      button4.onclick(true);
    } else {
      button5.onclick(true);
    }
    //pijltoetsen terug
  } else if (key === 39 || key === 40) {
    if (radio1.checked == true) {
      button2.onclick();
    } else if (radio2.checked == true) {
      button3.onclick();
    } else if (radio3.checked == true) {
      button4.onclick();
    } else if (radio4.checked == true) {
      button5.onclick();
    } else if (radio5.checked == true) {
      button1.onclick();
    } else {
      button1.onclick();
    }
  }
});

document.addEventListener("DOMContentLoaded", function(Event) {
  openMenu();
  changeColor();
});
