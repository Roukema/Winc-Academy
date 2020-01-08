const API_KEY = "";
const getData = async () => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

    const res = await fetch(apiUrl, { method: "GET" });
    const data = await res.json;
    console.log(data);
  } catch {
    console.log(Error);
  }
};
getData();
