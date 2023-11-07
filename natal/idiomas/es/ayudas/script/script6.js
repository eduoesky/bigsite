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


// FUNÇÕES DE PESQUISA ***
// e-mail
document.getElementById('pesquisaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var variavelNome = document.getElementById('variavel').value.toLowerCase();
    var resultadoDaPesquisa = pesquisarVariavel(variavelNome);
    document.getElementById('resultado').innerHTML = resultadoDaPesquisa;
});

function pesquisarVariavel(nome) {
    var variaveis = {
        "oesky@gmail.com": "¡Mi nombre no está disponible para este método!",
        "nicolasluiz@azul.com": "Email baneado.",
        "diabo@666.com": "Email baneado.",
        "pou@gmail.com": "Email muy usado, intenta otro.",
        "oesamaeduardakynlia@gmail.com": "Ah no, ¿¿sabes mi email?? *_*",
        "oesky@oesky.me": "Ah no, ¿¿sabes mi email?? *_*",
        "oesky@hotmail.com": "¡Mi nombre no está disponible para este método!",
        "pou@hotmail.com": "E-mail muy usado, intenta outro.",
    };

    nome = nome.toLowerCase();

    if (variaveis.hasOwnProperty(nome)) {
        return variaveis[nome];
    } else {
        return "Email disponible!";
    }
}

// usuário

document.getElementById('pesquisaFormp').addEventListener('submit', function (e) {
    e.preventDefault();
    var variavelNomee = document.getElementById('variavell').value.toLowerCase();
    var resultadoDaPesquisaa = pesquisarVariavell(variavelNomee);
    document.getElementById('resultadoo').innerHTML = resultadoDaPesquisaa;
});

function pesquisarVariavell(nome) {
   // as mensagens para pous toplikes são idênticas, com excessão à 'MIRAS' ** 
    var variaveiss = {
        "oesky": "Ups.. este nombre es mio *_*",
        "like_x1": "Ups.. este nombre es mio *_*",
        "games_luisa": "Pou baneado.",
        "letmebanyou": "Pou baneado.",
        "pou": "Este Pou es un topliker.",
        "pitufina_feliz": "Este Pou es un topliker.",
        "dbpaolo98": "Este Pou es un topliker.",
        "vera_no_pou": "Este Pou es un topliker.",
        "eltitochor_s3": "Este Pou es un topliker.",
        "miras": "Este Pou es un topliker, pero fue baneado.",
        "n0_more_war": "Este Pou es un topliker.",
        "sexy_nepali": "Este Pou es un topliker.",
        "brasiill": "Este Pou es un topliker.",
        "awja": "Este Pou es un topliker.",
        "c_u_x_i_t_a_nph": "Este Pou es un topliker.",
        "sexypou": "Este Pou es un topliker.",
        "nuclear_winter": "Este Pou es un topliker.",
        "tanfall_ff": "Este Pou es un topliker.",
        "tanfall": "Este Pou es un topliker.",
        "violetta_4": "Este Pou es un topliker.",
        "beautiful": "Este Pou es un topliker.",
        "luisa_games": "Pou baneado.",
        "mega_therioon": "Este Pou es un topliker.",
        "Pou2tiktok": "Este Pou fue deactivado para estos servicios.",
        "noctafly": "Este Pou fue deactivado para estos servicios.",
        "themoroccan": "Este Pou fue deactivado para estos servicios.",
        "qlw": "Este Pou fue deactivado para estos servicios.",
    };
    nome = nome.toLowerCase();

    if (variaveiss.hasOwnProperty(nome)) {
        return variaveiss[nome];
    } else {
        return "No tengo inteligencia artificial, pero este nombre está accesible!";
    }
}

// pros demais resultados:
document.getElementById('pesquisaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var resultadoDaPesquisa = pesquisarEmail(email);
    if (resultadoDaPesquisa !== "Email no encontrado.") {
        // encontrado
        document.getElementById('resultadoDisponivel').style.display = 'block';
        document.getElementById('resultadoDisponivel').innerHTML = "Email encontrado: " + resultadoDaPesquisa;
        document.getElementById('resultadoNaoDisponivel').style.display = 'none';
    } else {
        // não encontrado
        document.getElementById('resultadoNaoDisponivel').style.display = 'block';
        document.getElementById('resultadoDisponivel').style.display = 'none';
    }
});

// Função de exemplo para pesquisa de email (substitua pelo seu código real)
function pesquisarEmail(email) {
    // Aqui, você pode implementar a lógica de pesquisa real de email
    // Esta é apenas uma função de exemplo
    var emails = {
        "exemplo@email.com": "Email encontrado",
        "outro@email.com": "Outro email encontrado"
    };

    if (emails.hasOwnProperty(email)) {
        return emails[email];
    } else {
        return "Email não encontrado.";
    }
}