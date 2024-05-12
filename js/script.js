// DECLARANDO E INICIALIZANDO VARIABLES
const boton = document.getElementById("boton");
const navMenu = document.getElementById("nav_menu");
const botonMenuEmpresa = document.getElementById("empresa_page");
const botonMenuEscuela = document.getElementById("escuela_page");

// CONTROLANDO MIS AVANCES POR CONSOLA
console.log(botonMenuEscuela);
console.log(botonMenuEmpresa);
console.log(boton);
console.log(navMenu);

var style = window.getComputedStyle("navMenu");
var displayStyle = style.display;


// FUNCION PARA EL MENU HAMBURGUESA
function mostrarONo() {
  if (navMenu.style.display == "none") 
    navMenu.style.display = "block";
  else 
    navMenu.style.display = "none";
  
}
// FUNCIONES PARA MOSTRAR ENLACES
function irEmpresaPage() {
  window.location.href = "project01_empresa.html";
}
function irEscuelaPage() {
    window.location.href = "project01_escuela.html";
}

// CONTROLANDO MIS AVANCES POR CONSOLA
console.log(irEmpresaPage);
console.log(irEscuelaPage);
console.log(mostrarONo);

// LLAMADA DE EVENTOS CLICK
botonMenuEmpresa.addEventListener("click", irEmpresaPage);
botonMenuEscuela.addEventListener("click", irEscuelaPage);
boton.addEventListener("click", mostrarONo);
