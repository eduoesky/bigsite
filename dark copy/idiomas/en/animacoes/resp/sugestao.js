if (window.innerWidth < 768) {
//PRIMEIRA FUNÇÃO - c1.png (retângulo)
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.querySelector(".snowfall").appendChild(snowflake);

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -100;
    snowflake.style.left = startPositionX + "px";
    snowflake.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2;
    snowflake.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    snowflake.style.transform = `rotate(${rotation}deg)`;

    //reposição
    snowflake.addEventListener("animationiteration", () => {
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 12; i++) {
    createSnowflake();
}

//SEGUNDA FUNÇÃO - c2.png (oval)

function createSnewflake() {
    const snewflake = document.createElement("div");
    snewflake.classList.add("snewflake");
    document.querySelector(".c2fall").appendChild(snewflake);

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = 0;
    snewflake.style.left = startPositionX + "px";
    snewflake.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2; // entre 2s e 32s
    snewflake.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16; // entre 16px e 48px
    snewflake.style.width = size + "px";
    snewflake.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 10000; // entre 0 e 360° (máximo)
    snewflake.style.transform = `rotate(${rotation}deg)`;

    //reposição
    snewflake.addEventListener("animationiteration", () => {
        snewflake.style.left = Math.random() * window.innerWidth + "px";
        snewflake.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 12; i++) {
    createSnewflake();
}

//TERCEIRA FUNÇÃO - c3.png (nuvem)
function createSniwflake() {
    const sniwflake = document.createElement("div");
    sniwflake.classList.add("sniwflake");
    document.querySelector(".c3fall").appendChild(sniwflake);

    //posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = 0;
    sniwflake.style.left = startPositionX + "px";
    sniwflake.style.top = startPositionY + "px";

    //duração
    const animationDuration = Math.random() * 10 + 2; 
    sniwflake.style.animationDuration = animationDuration + "s";

    //tamanho
    const size = Math.random() * 32 + 16;
    sniwflake.style.width = size + "px";
    sniwflake.style.height = size + "px";

    //rotação
    const rotation = Math.random() * 360;
    sniwflake.style.transform = `rotate(${rotation}deg)`;

    //reposição
    sniwflake.addEventListener("animationiteration", () => {
        sniwflake.style.left = Math.random() * window.innerWidth + "px";
        sniwflake.style.top = -50 + "px";
    });
}

    //quantidade
    for (let i = 0; i < 12; i++) {
    createSniwflake();
}
}