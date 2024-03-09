function createFlocodeneve() {
    const floco = document.createElement("div");
    floco.classList.add("flocodeneve");
    document.querySelector(".snowfall").appendChild(floco);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = 0; 
    floco.style.left = startPositionX + "px";
    floco.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2; // entre 2s e 32s
    floco.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16; // entre 16px e 48px
    floco.style.width = size + "px";
    floco.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360; // entre 0 e 360°
    floco.style.transform = `rotate(${rotation}deg)`;

    // reposição
    floco.addEventListener("animationiteration", () => {
        floco.style.left = Math.random() * window.innerWidth + "px";
        floco.style.top = -50 + "px";
    });
}

    // quantidade
    for (let i = 0; i < 9; i++) {
    createFlocodeneve();
}