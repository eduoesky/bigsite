// PINGOS D'ÁGUA MAIS RÁPIDOS
function createSnowfake() {
    const snowfake = document.createElement("div");
    snowfake.classList.add("snowfake");
    document.querySelector(".snowfakes").appendChild(snowfake);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = Math.random() * -700;
    snowfake.style.left = startPositionX + "px";
    snowfake.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 3 + 0;
    snowfake.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 10 + 5;
    snowfake.style.width = size + "px";
    snowfake.style.height = size + "px";

    // ainda é tamanho, mas reajustei para que fossem mais estreitos :3
    snowfake.style.width = "3px";
    snowfake.style.height = "15px";
}

    // quantidade
    for (let i = 0; i < 550; i++) {
    createSnowfake();
}

// PINGOS D'ÁGUA MAIS LENTOS
function createSnewflake() {
    const snewflake = document.createElement("div");
    snewflake.classList.add("snewflake");
    document.querySelector(".snewflakes").appendChild(snewflake);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = Math.random() * -700;
    snewflake.style.left = startPositionX + "px";
    snewflake.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 10; // entre 10s e 30s
    snewflake.style.animationDuration = animationDuration + "s";

    // NÃO FUNCIONANDO ***!!!
    const size = Math.random() * 20 + 5;
    snewflake.style.width = size + "px";
    snewflake.style.height = size + "px";

}

    // quantidade
    for (let i = 0; i < 450; i++) {
    createSnewflake();
}

