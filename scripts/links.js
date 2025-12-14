const inputTitulo = document.getElementById("titulo");
const inputUrl = document.getElementById("url");
const lista = document.getElementById("lista");
const boton = document.getElementById("add");

let links = JSON.parse(localStorage.getItem("links")) || [];

function guardarLinks() {
  localStorage.setItem("links", JSON.stringify(links));
}

function crearLink(link, index) {

  const div = document.createElement("div");
  div.classList.add("item");

  div.innerHTML = `
    <a href="${link.url}" target="_blank">${link.titulo}</a>
    <button>X</button>
  `;

  div.querySelector("button").addEventListener("click", () => {
    links.splice(index, 1);
    guardarLinks();
    mostrarLinks();
  });

  lista.appendChild(div);
}


function mostrarLinks() {
  lista.innerHTML = "";
  links.forEach((link, index) => crearLink(link, index));
}

boton.addEventListener("click", () => {

  const titulo = inputTitulo.value;
  const url = inputUrl.value;

  if (titulo === "" || url === "") return;

  links.push({ titulo, url });
  guardarLinks();
  mostrarLinks();

  inputTitulo.value = "";
  inputUrl.value = "";
});

mostrarLinks();
