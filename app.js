// let list = document.getElementById("pokemon-list");

// let fetchPok = () => {
//   fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (res) {
//       console.log(res.results, "pok list");

//       res.results.forEach(function (pokemon) {
//         let listItem = document.createElement("li");
//         listItem.textContent = pokemon.name;
//         list.appendChild(listItem);
//         listItem.addEventListener("click", () => {
//           console.log(pokemon);
//         });
//       });
//     })
//     .catch(function (error) {
//       console.error("Error fetching the Pokémon list:", error);
//     });
// };
// window.onload = () => {
//     fetchPok();
//   };

let list = document.getElementById("pokemon-list");

let fetchPok = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((res) => {
      res.results.forEach((pokemon) => {
        let li = document.createElement("li");
        li.textContent = pokemon.name;
        list.appendChild(li);
        li.addEventListener("click", () => {
          console.log(pokemon);
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

window.onload = () => {
  fetchPok();
};
