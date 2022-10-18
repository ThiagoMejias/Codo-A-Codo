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
}
// header

// galeria
const contenedor = document.querySelector(".container-imagenes");
const btnDerecha = document.getElementById("btnDerecha");
const btnIzquierda = document.getElementById("btnIzquierda");

let imagenActual = contenedor.childNodes[1];
imagenActual.style.display = "block";
const btnAdelante = document.getElementById;
//imagenActual.classList.toggle("active-img");

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

// form
const btn = document.getElementById("btnForm");
btn.addEventListener("click", validarForm);

function validarForm() {
  const txtNombre = document.getElementById("fname");
  const txtMail = document.getElementById("mail");

  if (txtNombre.value.length < 1 || txtMail.value.length < 1) {
    alert("Hay algun campo vacio!");
  } else document.getElementById("form").submit();
}
