// functie presenteert poster in de dom, in een li van een ul
const addMoviesToDom = array => {
  //// hier eerst aller deleten voordat we weer een array plaatsen

  let list = document.getElementById("list"); // Get the <ul> element with id="list"
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  } // Remove <ul>'s first child nodes

  array.forEach(movie => {
    {
      let node = document.createElement("LI"); // create a li for each movie
      let linknode = document.createElement("a"); // create a link
      let imgnode = document.createElement("img"); // create a img for each movie
      linknode.href = " https://www.imdb.com/title/" + movie.imdbID;
      imgnode.src = movie.Poster; // set src for each movie
      node.appendChild(linknode).appendChild(imgnode); // make img child of li
      document.getElementById("list").appendChild(node); // make li child of ul
    }
  });
};

const allMovies = data.movies;
// filter newest
const NewestMovies = data.movies.filter(movie => {
  return movie.Year >= 2014;
});
// filter on name
const NameMovies = titleWithWord => {
  let MovieArray = data.movies.filter(movie => {
    return movie.Title.includes(titleWithWord);
  });

  addMoviesToDom(MovieArray);
};

const handleOnChangeEvent = event => {
  switch (event.target.value) {
    case "nieuwsteFilms":
      addMoviesToDom(NewestMovies);
      break;
    case "Avengers":
      NameMovies("Avengers");
      break;
    case "X-Men":
      NameMovies("X-Men");
      break;
    case "Princess":
      NameMovies("Princess");
      break;
    case "Batman":
      NameMovies("Batman");
      break;
  }
};

const EventListener = () => {
  const radioButtons = document.getElementsByName("buttons");
  radioButtons.forEach(element => {
    element.addEventListener("change", handleOnChangeEvent);
  });
};
const addHomeEvent = () => {
  const Home = document.getElementById("Home");
  Home.addEventListener("click", () => addMoviesToDom(allMovies));
  //Home.onclick = addMoviesToDom(allMovies); zou ook moeten werken, liever niet
  //Home.addEventListener("click", addMoviesToDom(allMovies) ) werkt niet
};
// console.log(NewestMovies);
document.addEventListener("DOMContentLoaded", event => {
  //   handleOnChangeEvent();
  //   addMoviesToDom(handleOnChangeEvent());
  addMoviesToDom(allMovies);
  EventListener();
  addHomeEvent();
});
