
// DECLARANDO E INICIALIZANDO VARIABLES
const boton = document.getElementById("boton");
const navMenu = document.getElementById("nav_menu");


// CONTROLANDO MIS AVANCES POR CONSOLA

// console.log(boton);
// console.log(navMenu);

// var style = window.getComputedStyle("navMenu");
// var displayStyle = style.display;


// FUNCION PARA EL MENU HAMBURGUESA
function mostrarONo() {
  if (navMenu.style.display == "none"){ 
    navMenu.style.display = "flex";
}else{ 
  navMenu.style.display = "none";
}
};



let botonAtributo = boton.setAttribute("target", "_blank");
// console.log(botonAtributo);

// CONTROLANDO MIS AVANCES POR CONSOLA

console.log(mostrarONo);

// LLAMADA DE EVENTOS CLICK

boton.addEventListener("click", mostrarONo);




// CARRUSEL

let rutaSrc= document.querySelector(".foto").getAttribute("src");
let newAtr= document.querySelector(".foto");
newAtr.setAttribute("alt", "descripcion");

// ejecuta todo esto cuando el navegador esté cargado
// es anonima y se autoejecuta
window.onload = function () {
  // push y pop

  //  let foto1 =
  //  let foto2 =
  //  let foto3 =
// almacenamos la imagen
  let fotos = ["foto1-pase.jpg", "foto2-pase.jpg", "foto3-pase1@3x.jpg"];

  // 
// console.log(fotos);
// console.log(fotos[0]);
// console.log(fotos[1]);
// console.log(fotos[2]);


  let descripcion = ["descripcion1", "descripcion2", "descripcion3"];

  let posicionActual = 0;
  let descripcionActual = 0;

  let $botonRetroceder = document.getElementById("retroceder");
  let $botonAvanzar = document.getElementById("avanzar");

  // FUNCIONES AVANZAR Y RETROCEDER

  function avanzarFoto() {
    if (
      posicionActual >= fotos.length - 1 &&
      descripcionActual >= descripcion.length - 1
    ) {
      posicionActual = 0;
      descripcionActual = 0;
    } else {
      posicionActual++;
      descripcionActual++;
    }
    renderizarImagen();
  };

  function retrocederFoto() {
    if (posicionActual <= 0 && descripcionActual <= 0) {
      posicionActual = fotos.length - 1;
      descripcionActual = descripcion.length - 1;
    } else {
      posicionActual--;
      descripcionActual--;
    }

    renderizarImagen();
  };

  // pinta la imagen en el navegador
  function renderizarImagen() {
    document.getElementById("imagen").innerHTML =
    `<img src="img/${fotos[posicionActual]}" alt="${descripcion[descripcionActual]}">`;
  }
  
  //+++++++++ EVENTOS +++++++++++

  $botonAvanzar.addEventListener("click", avanzarFoto);
  $botonRetroceder.addEventListener("click", retrocederFoto);

// ++++++++ INICIALIZAR +++++++++
renderizarImagen();

};
// FIN FUNCION WINDOW ONLOAD
