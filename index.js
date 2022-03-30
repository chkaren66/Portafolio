const boton_nav = document.querySelector(".bar");
const lista_menu = document.querySelector(".lista-menu");

boton_nav.addEventListener("click", () => {
 lista_menu.classList.toggle("bar-visible");
});