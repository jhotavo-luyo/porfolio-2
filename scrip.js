// ****************************************************
// contactos
// ****************************************************
const btn__menu = document.querySelector("#btn__menu");
const barraContactos = document.querySelector("#contacto");

btn__menu.addEventListener("click",()=>{
    // agregamos estilos
    if (barraContactos.style.display === "none") {
        barraContactos.style.display = "flex";
    } else {
        barraContactos.style.display = "none";
    }
    // preventDefault();
    
})
// ****************************************************
// Hero
// ****************************************************