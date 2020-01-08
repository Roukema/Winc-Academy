//   const inhoudContainer = () => {
const createContainer = async data => {
  // create element
  let divContainer = document.createElement("div");
  let titlenode = document.createElement("h3");
  let Instructionnode = document.createElement("p");
  let imgnode = document.createElement("img");
  let ingredientsnode = document.createElement("ul");
  let measuresnode = document.createElement("ul");

  // change their properties
  ingredientsnode.setAttribute("id", "ingredients");
  measuresnode.id = "measure";
  titlenode.innerHTML = data.drinks[0].strDrink;
  imgnode.src = data.drinks[0].strDrinkThumb;
  Instructionnode.innerHTML = data.drinks[0].strInstructions;

  for (let i = 1; i < 16; i++) {
    const ingredientsArray = data.drinks[0]["strIngredient" + i];
    [ingredientsArray].forEach(element => {
      if (ingredientsArray != null) {
        let ingredientnode = document.createElement("li");
        let text = document.createTextNode(element);
        ingredientnode.appendChild(text);
        ingredientsnode.appendChild(ingredientnode);
      } else {
        console.log("we zijn er");
        i = 17;
      }
    });
  }
  for (let i = 1; i < 16; i++) {
    const measureArray = data.drinks[0]["strMeasure" + i];
    [measureArray].forEach(element => {
      if (measureArray != null) {
        let measurenode = document.createElement("li");
        let text = document.createTextNode(element);
        measurenode.appendChild(text);
        measuresnode.appendChild(measurenode);
      } else {
        console.log("we zijn er");
        i = 17;
      }
    });
  }

  //put elements together
  document
    .getElementById("Container")
    .appendChild(divContainer)
    .appendChild(ingredientsnode);
  document
    .getElementById("Container")
    .appendChild(divContainer)
    .appendChild(measuresnode);
  divContainer.appendChild(titlenode);
  divContainer.appendChild(Instructionnode);
  divContainer.appendChild(imgnode);
  return divContainer;
};

const addCocktailToDom = async Array => {
  //// hier eerst aller deleten voordat we weer een array plaatsen
  const container = document.getElementById("Container");
  container.innerHTML = "";

  createContainer(data);
};

// const addCocktailToDom = async array => {
//   //// hier eerst aller deleten voordat we weer een array plaatsen
//   const container = document.getElementById("Container");
//   container.innerHTML = "";

//   [array].forEach(async element => {
//     let cocktailContainer = document.createElement("div");
//     const newContainer = await createContainer(data.drinks[element]);
//     console.log("newContainer");
//     document
//       .getElementById("Container")
//       .appendChild(cocktailContainer)
//       .appendChild(newContainer);
//   });

// const ContainerItems = createContainer(data);

//   ContainerItems.forEach(Element => {
//     container.appendChild(Element);
//   });

// uit elkaar trekken met foreach?

const getDataCocktail = async cocktailName => {
  data = await getCocktailByName(cocktailName);
  addCocktailToDom(data);
  console.log(data);
};
const getDataIngredient = async ingredientName => {
  data = await getCocktailByIngredient(ingredientName);
  addCocktailToDom(data);
  console.log("get data ingredient:" + data);
};

const addCocktailNameSearchListener = () => {
  const button = document.getElementById("cocktailNameButton");
  button.addEventListener("click", () => {
    const input = document.getElementById("cocktailNameInput");
    const cocktailName = input.value;
    console.log(input);
    getDataCocktail(cocktailName);
  });
};

const addIngredientNameSearchListener = () => {
  const button = document.getElementById("ingredientNameButton");
  button.addEventListener("click", () => {
    const input = document.getElementById("ingredientNameInput");
    const ingredientName = input.value;
    console.log(input);
    getDataIngredient(ingredientName);
  });
};

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
  addCocktailNameSearchListener();
  addIngredientNameSearchListener();
});
