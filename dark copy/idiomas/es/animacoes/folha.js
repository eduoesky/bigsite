function createFolhas() {
    const hoja = document.createElement("div");
    hoja.classList.add("folha");
    document.querySelector(".snowfall").appendChild(hoja);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -50;
    hoja.style.left = startPositionX + "px";
    hoja.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2; // entre 2s e 32s :3
    hoja.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    hoja.style.width = size + "px";
    hoja.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360; // entre 0 a 360°
    hoja.style.transform = `rotate(${rotation}deg)`;

    // reposição
    hoja.addEventListener("animationiteration", () => {
        hoja.style.left = Math.random() * window.innerWidth + "px";
        hoja.style.top = -50 + "px";
    });
}

    // quantidade
    for (let i = 0; i < 18; i++) {
    createFolhas();
}
