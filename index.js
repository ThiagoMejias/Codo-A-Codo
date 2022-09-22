


const carruzel = document.querySelector("#carruzel");

let imagenes = document.querySelectorAll(".conteiner-img");
let ultimaImg =  imagenes[imagenes.length - 1];

const btnIzquierda = document.getElementById("boton-izquierda");
const btnDerecha = document.getElementById("boton-derecha");

carruzel.insertAdjacentElement('afterbegin',ultimaImg);
