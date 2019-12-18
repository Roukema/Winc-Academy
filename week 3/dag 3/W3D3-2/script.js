// let id = [];
// for (let i = 0; i < 100; i++) {
//   id.push(i);
// }
// console.log(id);
// // const id = 1;
// fetch("https://swapi.co/api/people/1/")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => {
//     console.log(error);
//   });
const data = fetch("https://swapi.co/api/people/1/", {
  method: "get",
  body: JSON.stringify()
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    console.log(error);
  });
