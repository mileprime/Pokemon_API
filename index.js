let list = document.getElementById("pok-list");

let fetchPok = () => {
  let pokPromise = new Promise((resolve, reject) => {
    let data = fetch("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      return res.json();
    });
    if (data) {
      resolve(data);
    } else {
      reject("Broken link");
    }
  });
  pokPromise.then((data) => {
    console.log(data, "data");
    //data is array of objects that's why I need to use foreach to loop through it
    data.results.forEach((pok) => {
      let li = document.createElement("li");

      li.textContent = pok.name;
      list.appendChild(li);
      //add Event to each li
      li.addEventListener("click", () => {
        console.log(pok);
      });
    });
  });
};

window.onload = () => {
  fetchPok();
};
