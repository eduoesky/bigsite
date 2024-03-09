// Função para criar flocos de neve aleatórios
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.querySelector(".visfall").appendChild(snowflake);

    // Define uma posição inicial aleatória no topo da tela
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = 0; // Começar de uma posição acima da tela
    snowflake.style.left = startPositionX + "px";
    snowflake.style.top = startPositionY + "px";

    // Define uma animação de duração aleatória para cada floco
    const animationDuration = Math.random() * 10 + 2; // Entre 2s e 32s
    snowflake.style.animationDuration = animationDuration + "s";

    // Define um tamanho aleatório para cada floco
    const size = Math.random() * 32 + 16; // Entre 16px e 48px
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";

    const rotation = Math.random() * 10000; // Entre 0 e 360 graus
    snowflake.style.transform = `rotate(${rotation}deg)`;

    // Adiciona um evento de final de animação para recolocar o floco no topo
    snowflake.addEventListener("animationiteration", () => {
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = -50 + "px";
    });
}

// Crie vários flocos de neve
for (let i = 0; i < 10; i++) {
    createSnowflake();
}
