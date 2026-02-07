// ****************************************************
// contactos
// ****************************************************
const btn__menu = document.querySelector("#btn__menu");
const btn__principal = document.querySelector(".btn__principal");
const barraContactos = document.querySelector("#contacto");
const handleContact = () => {
    if (barraContactos.style.display === "none" || btn__principal.style.display === "none") {
        barraContactos.style.display = "flex";
    } else {
        barraContactos.style.display = "none";
    }
}
btn__menu.addEventListener("click", handleContact);
btn__principal.addEventListener("click", handleContact);

// ****************************************************
//  funcionalidad iconos contatar
// ****************************************************
// items
const correo = document.querySelector(".conten_icon_mail");
const linkedin = document.querySelector(".conten_icon_linkedin");
const github = document.querySelector(".conten_icon_github")
const cv = document.querySelector(".conten_icon_cv");


correo.addEventListener('click', () => {
    const email = "jhoan.developer@email.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Correo electrónico copiado al portapapeles.");
    }).catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
        alert('No se pudo copiar el correo. Por favor, cópialo manualmente: ' + email);
    });
});

linkedin.addEventListener('click', () => {
    // Cambia la URL por la de tu perfil de LinkedIn
    window.open("https://www.linkedin.com/in/jhoan-luyo-120433387/", "_blank");
});

github.addEventListener('click', () => {
    // Cambia la URL por la de tu perfil de GitHub
    window.open("https://github.com/jhotavo-luyo", "_blank");
});

cv.addEventListener('click', () => {
    // Cambia la ruta al de tu CV
    const link = document.createElement('a');
    link.href = 'media/cv.pdf';
    link.download = 'cv-Jhoan-Luyo-Frontend.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
// efectos descriptivos
const efectoMail = document.querySelector(".tool1");
const efectoLinkedin = document.querySelector(".tool2");
const efectoGithub = document.querySelector(".tool3");
const efectoCv = document.querySelector(".tool4");

const handleEffects = (item, elementDescript, classEfecto)=>{
    item.addEventListener("mouseover", () => {
        if (elementDescript.classList.contains("desaparecer")) {
            elementDescript.classList.replace("desaparecer", classEfecto);
            console.log("hover");
        }
    })
    item.addEventListener("mouseleave", () => {
        if (elementDescript.classList.contains(classEfecto)) {
            elementDescript.classList.replace(classEfecto, "desaparecer");
        }
    })
    
}
handleEffects(correo, efectoMail, "copy_mail");
handleEffects(linkedin, efectoLinkedin, "ir_linkedin");
handleEffects(github, efectoGithub, "ir_github");
handleEffects(cv, efectoCv, "download_cv");

// ****************************************************
//  Lógica Touch para Móviles (effect arrastrar)
// ****************************************************
const listaContactos = document.querySelector("#contacto ul");

const mapaIconos = new Map([
    [correo, { tooltip: efectoMail, clase: "copy_mail" }],
    [linkedin, { tooltip: efectoLinkedin, clase: "ir_linkedin" }],
    [github, { tooltip: efectoGithub, clase: "ir_github" }],
    [cv, { tooltip: efectoCv, clase: "download_cv" }]
]);

const limpiarTooltips = () => {
    mapaIconos.forEach(({ tooltip, clase }) => {
        if (tooltip.classList.contains(clase)) {
            tooltip.classList.replace(clase, "desaparecer");
            
        }
    });
};

listaContactos.addEventListener("touchmove", (e) => {
    e.preventDefault();
    
    const touch = e.touches[0];
    const elementoBajoDedo = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (!elementoBajoDedo) return;

    const icono = elementoBajoDedo.closest("li");

    if (icono && mapaIconos.has(icono)) {
        const { tooltip, clase } = mapaIconos.get(icono);
        
        if (tooltip.classList.contains("desaparecer")) {
            limpiarTooltips();
            tooltip.classList.replace("desaparecer", clase);
        }
    } else {
        limpiarTooltips();
    }
}, { passive: false });

listaContactos.addEventListener("touchend", () => {
    limpiarTooltips();
});


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