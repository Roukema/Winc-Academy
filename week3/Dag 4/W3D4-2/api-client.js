const getCocktailByName = async name => {
  apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json();
    console.log(data);
    return data;
  } catch {
    console.log(Error);
  }
};
const getCocktailByIngredient = async ingredient => {
  apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json();
    console.log(data);
    return data;
  } catch {
    console.log(Error);
  }
};
