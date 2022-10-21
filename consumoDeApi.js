var url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json())
  .then((data) => agregarComentarios(data))
  .catch((error) => console.log("Error", error));

function agregarComentarios(data) {
  let nombres = Array();
  for (const key in data) {
    nombres.push(data[key].name);
  }
  insertarData(nombres);
}

function insertarData(nombresFalsos) {
  const div = crearDiv(nombresFalsos);
  const section = document.querySelector(".section-opinon");
  console.log(div);
  section.appendChild(div);
}

function crearDiv(objetos) {
  if (!Array.isArray(objetos)) return null;
  const divContenedor = document.createElement("div");
  divContenedor.setAttribute("class", "conteiner_opiniones");

  const texto = "Suenan hermoso en vivo!";

  objetos.forEach((element) => {
    const Newdiv = document.createElement("div");
    const h5Nombre = document.createElement("h5");
    const p = document.createElement("p");
    p.textContent = texto;
    h5Nombre.textContent = element;
    Newdiv.setAttribute("class", "container-opinion");
    Newdiv.appendChild(h5Nombre);
    Newdiv.appendChild(p);
    divContenedor.appendChild(Newdiv);
  });

  return divContenedor;
}
