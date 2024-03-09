document.addEventListener("DOMContentLoaded", function () {
    const container = document.body;

    function createDivAnimada() {
        const divAnimada = document.createElement("div");
        divAnimada.classList.add("div-animada");
        divAnimada.style.left = `${Math.random() * 100}vw`;
        container.appendChild(divAnimada);

        setTimeout(() => {
            divAnimada.remove();
        }, 2000);
    }

    function criarDivAnimada() {
        createDivAnimada();
    }

    setInterval(criarDivAnimada, 4000);
});
