let id = [];
for (let i = 0; i < 100; i++) {
  id.push(i);
}
let ids = [...id];
console.log(ids);
// const id = 1;\
ids.forEach(Element => {
  fetch(`https://swapi.co/api/people/${Element}/`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.log(error);
    });
});
// fetch werkt niet in je terminal en zul je via de console van chrome moeten checken. of in node een extra instaleren.
