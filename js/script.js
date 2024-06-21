// DECLARANDO E INICIALIZANDO VARIABLES
const boton = document.getElementById("boton");
let $botonAvanzar, $botonRetroceder;
const navMenu = document.getElementById("nav_menu");
const div = document.getElementById("divParaImg");
let img = document.createElement("img");
let posicionActual = 0;
let descripcionActual = 0;
let fotos = [
  "img/foto1-pase.jpg",
  "img/foto2-pase.jpg",
  "img/foto3-pase.jpg",
];


///////////// FUNCION PARA EL MENU HAMBURGUESA ///////////////////
function mostrarONo() {
  if (navMenu.style.display == "none") {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
}

// LLAMADA DE EVENTOS CLICK
boton.addEventListener("click", mostrarONo);

///////////////// CARRUSEL /////////////

// 
$botonAvanzar =document.getElementById('avanzar');
$botonRetroceder =document.getElementById('retroceder');

// FUNCIONES AVANZAR Y RETROCEDER
function avanzarFoto() {
  if ( posicionActual >= (fotos.length - 1) ) {
    posicionActual = 0;
    // descripcionActual = 0;
  } else {
    posicionActual= posicionActual + 1;
    // descripcionActual++;
  }
  renderizarImagen();
}

function retrocederFoto() {
  if (posicionActual <= 0) {
    posicionActual = fotos.length - 1;
    // descripcionActual = descripcion.length - 1;
  } else {
    posicionActual--;
    // descripcionActual--;
  }

  renderizarImagen();
}

function renderizarImagen() {
  img.src = fotos[posicionActual];
  div.innerHTML = ''; // Limpiar el div antes de agregar la nueva imagen
  div.appendChild(img);
  console.log('Imagen mostrada:', img.src);
}

// ++++++++ INICIALIZAR +++++++++
renderizarImagen();

//+++++++++ EVENTOS +++++++++++
$botonAvanzar.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el enlace navegue
  avanzarFoto();
});

$botonRetroceder.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el enlace navegue
  retrocederFoto();
});
