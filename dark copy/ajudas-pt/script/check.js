function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.querySelector(".checkfall").appendChild(snowflake);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = 0;
    snowflake.style.left = startPositionX + "px";
    snowflake.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2; // entre 2s e 32s
    snowflake.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16;
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 10000; // g°
    snowflake.style.transform = `rotate(${rotation}deg)`;

    // reposição
    snowflake.addEventListener("animationiteration", () => {
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = -50 + "px";
    });
}

    // quantidade
    for (let i = 0; i < 10; i++) {
    createSnowflake();
}
