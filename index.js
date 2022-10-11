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

// header//
const line1__bars = document.querySelector(".line1__barras-menu");
const line2__bars = document.querySelector(".line2__barras-menu");
const line3__bars = document.querySelector(".line3__barras-menu");
const nav = document.querySelector(".nav-celular");

nav.addEventListener("click", cerrarAbrirMenu);
document
  .querySelector(".barras_menu")
  .addEventListener("click", cerrarAbrirMenu);

function cerrarAbrirMenu() {
  line1__bars.classList.toggle("activeline1__barras-menu");
  line2__bars.classList.toggle("activeline2__barras-menu");
  line3__bars.classList.toggle("activeline3__barras-menu");
  nav.classList.toggle("active-header");
  // nav.style.visibility == "hidden"
  //   ? (nav.style.visibility = "visible")
  //   : (nav.style.visibility = "hidden");
}
// header

// galeria
const contenedor = document.querySelector(".container-imagenes");
const btnDerecha = document.getElementById("btnDerecha");
const btnIzquierda = document.getElementById("btnIzquierda");

let imagenActual = contenedor.childNodes[1];
const btnAdelante = document.getElementById;
imagenActual.style.display = "block";
console.log();
btnDerecha.addEventListener("click", adelante);
btnIzquierda.addEventListener("click", atras);
function adelante() {
  imagenActual.style.display = "none";
  imagenActual.nextElementSibling != null
    ? (imagenActual = imagenActual.nextElementSibling)
    : (imagenActual = contenedor.firstElementChild);
  imagenActual.style.display = "block";
}

function atras() {
  imagenActual.style.display = "none";
  imagenActual.previousElementSibling != null
    ? (imagenActual = imagenActual.previousElementSibling)
    : (imagenActual = contenedor.lastElementChild);

  imagenActual.style.display = "block";
}

// galeria
