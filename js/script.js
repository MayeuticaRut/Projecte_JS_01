
const boton= document.getElementById("boton");
const navMenu= document.getElementById("nav_menu");
const botonMenuEmpresa= document.getElementById("empresa_page"); 


console.log(botonMenuEmpresa);
console.log(boton);
console.log(navMenu);
var style= window.getComputedStyle(navMenu);
var displayStyle= style.display;

console.log(botonMenuEmpresa);

function mostrarONo(params) {
    if (navMenu.style.display == "none") {
        navMenu.style.display = 'block';
    }else {
navMenu.style.display = "none";
    }
    
}
function irEmpresaPage() {
    window.location.href="project01_empresa.html";
}
console.log(irEmpresaPage);
botonMenuEmpresa,addEventListener("click", irEmpresaPage);
boton.addEventListener("click", mostrarONo);



