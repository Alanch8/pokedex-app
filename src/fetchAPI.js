const url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let element = document.getElementById("elem");
    element.innerHTML = `
    <h1>${data.name}</h1>
    <p>#${data.id}</p>
    <img src='${data.sprites.front_default}'/>
    `;
    console.log(data);
  })
  .catch((err) => console.log(err));
