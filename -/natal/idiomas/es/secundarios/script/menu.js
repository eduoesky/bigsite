const botaoAbrirMenu = document.getElementById("abrirMenu");
const botaoFecharMenu = document.getElementById("fecharMenu");
const menu = document.getElementById("menu");

botaoAbrirMenu.addEventListener("click", () => {
    menu.classList.remove("fechado");
});

botaoFecharMenu.addEventListener("click", () => {
    menu.classList.add("fechado");
});
