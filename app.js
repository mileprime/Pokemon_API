let list = document.getElementById("pok-list");

let fetchPok_v2 = async () => {
  let pokPromis = await fetch("https://pokeapi.co/api/v2/pokemon/").then(
    (res) => {
      return res.json();
    }
  );
  return pokPromis;
};

window.onload = () => {
  fetchPok_v2().then((data) => {
    data.results.forEach((pok) => {
      let li = document.createElement("li");
      li.textContent = pok.name;
      list.appendChild(li);
      //add event listen to each li
      li.addEventListener("click", () => {
        console.log(pok);
      });
    });
  });
};

// let list = document.getElementById("pokemon-list");

// let fetchPok = () => {
//   fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then((res) => res.json())
//     .then((res) => {
//       res.results.forEach((pokemon) => {
//         let li = document.createElement("li");
//         li.textContent = pokemon.name;
//         list.appendChild(li);
//         li.addEventListener("click", () => {
//           console.log(pokemon);
//         });
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// };

// window.onload = () => {
//   fetchPok();
// };
