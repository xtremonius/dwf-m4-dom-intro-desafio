const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const itemsEls = document.querySelectorAll(".lista li");
  const listaEl = document.querySelector(".lista");

  /**
   * usando forEach como arrow fuction
   
  itemsEls.forEach((el) => {
    console.log(el);
  });

   * usando for of
   */
  for (let el of itemsEls) {
    //console.log(el);
    el.remove();
  }

  for (let item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = item.tema;
    const laClaseQueLeVoyAAsignarAlLi = item.class || "item";
    newLiEl.classList.add(laClaseQueLeVoyAAsignarAlLi);
    listaEl.appendChild(newLiEl);
  }
}

main();
