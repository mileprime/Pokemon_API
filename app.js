let list = document.getElementById("pok-list");

let fetchPok = async () => {
  try {
    let pokPromis = await fetch("https://pokeapi.co/api/v2/pokemon/").then(
      (res) => {
        return res.json();
      }
    );
    return pokPromis;
  } catch (error) {
    return error;
  }
};

let fetchUrl = async (url) => {
  try {
    let pokPromis = await fetch(url).then((res) => {
      return res.json();
    });
    return pokPromis;
  } catch (error) {
    return error;
  }
};

window.onload = () => {
  fetchPok().then((data) => {
    data.results.forEach((pok) => {
      let img = document.createElement("img");
      fetchUrl(pok.url).then((res) => {
        img.src = res.sprites.front_default;
      });

      let li = document.createElement("li");
      li.textContent = pok.name;
      list.appendChild(li);
      li.appendChild(img);
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
