const elementos = document.querySelectorAll(".reveal");

const mostrarElemento = () => {

    elementos.forEach((elemento) => {

        const posicion = elemento.getBoundingClientRect().top;

        const alturaPantalla = window.innerHeight;

        if (posicion < alturaPantalla - 100) {
            elemento.classList.add("active");
        }

    });

};

window.addEventListener("scroll", mostrarElemento);

mostrarElemento();
/* =========================
   MENÚ MÓVIL
========================= */

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    navLinks.classList.toggle("active");

});


/* Cerrar menú al seleccionar una opción */

links.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");

        navLinks.classList.remove("active");

    });

});
/* =========================
   NAVBAR AL HACER SCROLL
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
/* =========================
   SECCIÓN ACTIVA
========================= */

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;


        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });


    links.forEach((link) => {

        link.classList.remove("active");


        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});
/* =========================
   EFECTO DEL CURSOR
========================= */

const mouseGlow = document.querySelector(".mouse-glow");

if (mouseGlow) {
    document.addEventListener("mousemove", (event) => {
        mouseGlow.style.left = `${event.clientX}px`;
        mouseGlow.style.top = `${event.clientY}px`;
    });
}