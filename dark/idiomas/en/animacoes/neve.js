// PRIMEIRA FUNÇÃO - neve 
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.querySelector(".snowflakes").appendChild(snowflake);

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = Math.random() * -700;
    snowflake.style.left = startPositionX + "px";
    snowflake.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 10 + 5;
    snowflake.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 10 + 5;
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";
}

// Verifica o tamanho da tela
if (window.innerWidth <= 600) {
    // Se o tamanho da tela for menor ou igual a 600px, cria apenas 50 divs de neve
    for (let i = 0; i < 56; i++) {
        createSnowflake();
    }
} else {
    // Caso contrário, cria 250 divs de neve em telas maiores
    for (let i = 0; i < 250; i++) {
        createSnowflake();
    }
}


// SEGUNDA FUNÇÃO
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
    const animationDuration = Math.random() * 10 + 10; // entre 5s e 15s
    snewflake.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 20 + 5; // entre 5px e 15px
    snewflake.style.width = size + "px";
    snewflake.style.height = size + "px";
}

// Verifica o tamanho da tela
if (window.innerWidth <= 600) {
    // Se o tamanho da tela for menor ou igual a 600px, cria apenas 50 divs de neve
    for (let i = 0; i < 50; i++) {
        createSnewflake();
    }
} else {
    // Caso contrário, cria 450 divs de neve em telas maiores
    for (let i = 0; i < 450; i++) {
        createSnewflake();
    }
}


// TERCEIRA FUNÇÃO
function createSnewfleke() {
    const snewfleke = document.createElement("div");
    snewfleke.classList.add("snewfleke");
    document.querySelector(".snewflekes").appendChild(snewfleke);

    // atraso
    const animationDelay = Math.random() * 3; // entre 0s e 3s
    snewfleke.style.animationDelay = animationDelay + "s";

    // posição
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = Math.random() * -700;
    snewfleke.style.left = startPositionX + "px";
    snewfleke.style.top = startPositionY + "px";

    // duração
    const animationDuration = Math.random() * 15 + 10;
    snewfleke.style.animationDuration = animationDuration + "s";

    // tamanho
    const size = Math.random() * 6 + 5; // entre 5px e 15px
    snewfleke.style.width = size + "px";
    snewfleke.style.height = size + "px";

    // rotação
    const rotation = Math.random() * 360;
    snewfleke.style.transform = `rotate(${rotation}deg)`;
}

// Verifica o tamanho da tela
if (window.innerWidth <= 600) {
    // Se o tamanho da tela for menor ou igual a 600px, cria apenas 50 divs de neve
    for (let i = 0; i < 50; i++) {
        createSnewfleke();
    }
} else {
    // Caso contrário, cria 650 divs de neve em telas maiores
    for (let i = 0; i < 650; i++) {
        createSnewfleke();
    }
}
