function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.querySelector(".likefall").appendChild(snowflake);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = 0; // Começar de uma posição acima da tela
    snowflake.style.left = startPositionX + "px";
    snowflake.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 2; // entre 2s e 32s
    snowflake.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 32 + 16; // entre 16px e 48px
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360; // 0 a 360°
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
