//script.js
const titleToDom = mov => {
  document.getElementById("title").innerHTML = mov.movie_results[0].title;
};

const doSomethingWithData = async function() {
  const data = await getData();
  console.log(data);
};
//dry
const getMovieGenres = async function() {
  const genre = await getGenre();
  console.log(genre);
};
//dry
const getMovies = async function(title) {
  try {
    const data = await getMovie(title);
    console.log(data);
    const Naam = data.movie_results[0].title;
    console.log(Naam);
    titleToDom(data);
  } catch {
    console.log(err);
  }
};
//dry
getTopRatedMovies = async () => {
  const data = await getTop();
  console.log(data);
};

getTopRatedActionMovies = async () => {
  const data = await getTopAction();
  console.log(data);
};
getYear1975 = async () => {
  const data = await year1975();
  console.log(data);
};

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
  // doSomethingWithData();
  getMovieGenres();
  getMovies(imbdLion);
  getMovies(imbdJoker);
  getMovies(imbdToy);
  getTopRatedMovies();
  getTopRatedActionMovies();
  getYear1975();
});
