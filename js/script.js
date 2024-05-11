
var boton= document.getElementById("boton");
var navMenu= document.getElementById("nav_menu");
console.log(boton);
console.log(navMenu);
var style= window.getComputedStyle(navMenu);
var displayStyle= style.display;

console.log(displayStyle);

function mostrarONo(params) {
    if (navMenu.style.display == "none") {
        navMenu.style.display = 'block';
    }else {
navMenu.style.display = "none";
    }
    
}


boton.addEventListener("click", mostrarONo);



