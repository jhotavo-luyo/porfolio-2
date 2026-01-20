// ****************************************************
// contactos
// ****************************************************
const btn__menu = document.querySelector("#btn__menu");
const btn__principal = document.querySelector(".btn__principal");
const barraContactos = document.querySelector("#contacto");
const handleContact = ()=>{
if (barraContactos.style.display === "none" ||btn__principal.style.display === "none") {
        barraContactos.style.display = "flex";
    }else {
        barraContactos.style.display = "none";
    }
}
btn__menu.addEventListener("click",handleContact);
btn__principal.addEventListener("click",handleContact);
