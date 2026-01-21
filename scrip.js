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

// ****************************************************
// Modal
// ****************************************************
const openModalBtn = document.getElementById('btn__modal__info');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');

openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

