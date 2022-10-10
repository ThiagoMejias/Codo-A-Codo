// const carruzel = document.querySelector("#carruzel");

// let imagenes = document.querySelectorAll(".conteiner-img");
// let ultimaImg =  imagenes[imagenes.length - 1];

// const btnIzquierda = document.getElementById("boton-izquierda");
// const btnDerecha = document.getElementById("boton-derecha");

// carruzel.insertAdjacentElement('afterbegin',ultimaImg);

// const btnMenu = document.querySelector(".container-burguer");
// console.log(btnMenu);
// const nav = document.querySelector(".nav-celular");
// const lista = document.querySelector(".lista_enlaces_celular");

// btnMenu.addEventListener("click", () => {
//   console.log(nav);
//   if (nav.style.display != "flex") {
//     nav.style.display = "flex";
//     lista.style.display = "flex";
//     lista.style.flexDirection = "column";
//     nav.style.flexDirection = "column";
//   } else nav.style.display = "none";
// });

const line1__bars = document.querySelector(".line1__barras-menu");
const line2__bars = document.querySelector(".line2__barras-menu");
const line3__bars = document.querySelector(".line3__barras-menu");
const nav = document.querySelector(".nav-celular");
nav.style.display = "none";

nav.addEventListener("click", cerrarAbrirMenu);

document
  .querySelector(".barras_menu")
  .addEventListener("click", cerrarAbrirMenu);

function cerrarAbrirMenu() {
  line1__bars.classList.toggle("activeline1__barras-menu");
  line2__bars.classList.toggle("activeline2__barras-menu");
  line3__bars.classList.toggle("activeline3__barras-menu");
  if (nav.style.display == "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}
