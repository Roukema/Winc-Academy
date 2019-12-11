const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
  }
];

const nameArray = object => object.name;

console.log(superheroes.map(nameArray));

// onderstaande werkt niet?
// const arr1 = Array => (name1 = [Array.name]);
// return name1;
// superheroes.map(arr1);

// dit hieronder werkte ook:
// for (let hero of superheroes) console.log(hero.name);

const lichtGewicht = object => object.weight < 190;
console.log(superheroes.filter(lichtGewicht));

// filter de 200 pounds
const is200 = hero => {
  return hero.weight === "200";
};
const getName = hero => {
  return hero.name;
};
let hero200 = superheroes.filter(is200).map(getName);

console.log(hero200);

//   .filter(hero => {
//     return hero.weigth === 200;
//   })
//   .map(hero => {
//     return hero.name;
//   });

const firstArray = hero => hero.first_appearance;
console.log(superheroes.map(firstArray));

//
const DC = hero => {
  return hero.publisher === "DC Comics";
};

const Marvel = hero => {
  return hero.publisher === "Marvel Comics";
};

console.log("DC Comics: " + superheroes.filter(DC).map(getName));
let MarvelComics = superheroes.filter(Marvel).map(getName);

// console.log("DC Comics: " + DCComics);
console.log("Marvel Comics: " + MarvelComics);

superheroes.forEach(element => {
  if (element.weight === "unknown") {
    element.weight = 0;
  }
});
superheroes.forEach(element => (element.weight = parseInt(element.weight)));

console.log(superheroes[1].weight);
console.log(typeof superheroes[1].weight);

// let totGewicht = (accumulator, currentValue) => {
//   return accumulator + currentValue;
// };

const gewichtDC = superheroes.filter(DC).reduce((accumulator, hero) => {
  return accumulator + hero.weight;
}, 0);
console.log("gewicht DC " + gewichtDC);

const gewichtMarvel = superheroes.filter(Marvel).reduce((accumulator, hero) => {
  return accumulator + hero.weight;
}, 0);
console.log("gewicht Marvel: " + gewichtMarvel);
