const boton_nav = document.querySelector(".bar");
const lista_menu = document.querySelector(".lista-menu");
const lista_items = document.querySelectorAll(".nav-link-item");
boton_nav.addEventListener("click", () => {
 lista_menu.classList.toggle("bar-visible");
});

const accionMenu = () => {
    lista_menu.classList.toggle("bar-visible");
};

lista_items.forEach(element => element.addEventListener("click", accionMenu));
