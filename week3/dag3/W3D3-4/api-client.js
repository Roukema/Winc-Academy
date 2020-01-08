const getData = async function() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json();
    // console.log(data);
    return data;
  } catch {
    console.log(Error);
  }
};

const getGenre = async () => {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json();
    // console.log(data);
    return data;
  } catch {
    console.log(Error);
  }
};

const imbdLion = "tt6105098";
const imbdJoker = "tt7286456";
const imbdToy = "tt1979376";

const getMovie = async mov => {
  const movUrl = `https://api.themoviedb.org/3/find/${mov}?api_key=b69dd96bca8126fbcabbf049bfadff42&external_source=imdb_id`;
  try {
    const res = await fetch(movUrl, { method: "GET" });
    const data = await res.json();
    return data;
  } catch {
    console.log(Error);
  }
};

const getTop = async top => {
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json();
    // console.log(data);
    return data;
  } catch {
    console.log(Error);
  }
};
const getTopAction = async aTop => {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Action`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json();
    // console.log(data);
    return data;
  } catch {
    console.log(Error);
  }
};
const year1975 = async year => {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=1975`;
  try {
    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json();
    // console.log(data);
    return data;
  } catch {
    console.log(Error);
  }
};
