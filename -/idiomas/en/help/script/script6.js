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

if (window.innerWidth <= 600) {

    for (let i = 0; i < 56; i++) {
        createSnowflake();
    }
} else {

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

if (window.innerWidth <= 600) {

    for (let i = 0; i < 50; i++) {
        createSnewflake();
    }
} else {

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

if (window.innerWidth <= 600) {

    for (let i = 0; i < 50; i++) {
        createSnewfleke();
    }
} else {

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
        "oesky@gmail.com": "My name is no available to this method!",
        "nicolasluiz@azul.com": "Email banned.",
        "diabo@666.com": "Email banned.",
        "pou@gmail.com": "Email used too many times, try again.",
        "oesamaeduardakynlia@gmail.com": "Oops, do you know my email?? *_*",
        "oesky@oesky.me": "Oops, do you know my email?? *_*",
        "oesky@hotmail.com": "My name is no available to this method!",
        "pou@hotmail.com": "Email used too many times, try again.",
    };

    nome = nome.toLowerCase();

    if (variaveis.hasOwnProperty(nome)) {
        return variaveis[nome];
    } else {
        return "Email available!";
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
        "oesky": "Oops.. this is my name *_*",
        "Like_x1": "Oops.. this is my name *_*",
        "games_luisa": "Pou banned.",
        "letmebanyou": "Pou banned.",
        "pou": "This is a TopLiker Pou.",
        "pitufina_feliz": "This is a TopLiker Pou.",
        "dbpaolo98": "This is a TopLiker Pou.",
        "vera_no_pou": "This is a TopLiker Pou.",
        "eltitochor_s3": "This is a TopLiker Pou.",
        "miras": "This is a TopLiker Pou but has been banned.",
        "n0_more_war": "This is a TopLiker Pou.",
        "sexy_nepali": "This is a TopLiker Pou.",
        "brasiill": "This is a TopLiker Pou.",
        "awja": "This is a TopLiker Pou.",
        "c_u_x_i_t_a_nph": "This is a TopLiker Pou.",
        "sexypou": "This is a TopLiker Pou.",
        "nuclear_winter": "This is a TopLiker Pou.",
        "tanfall_ff": "This is a TopLiker Pou.",
        "tanfall": "This is a TopLiker Pou.",
        "violetta_4": "This is a TopLiker Pou.",
        "beautiful": "This is a TopLiker Pou.",
        "luisa_games": "Pou banned.",
        "mega_therioon": "This is a TopLiker Pou.",
        "Pou2tiktok": "This Pou has been deactivated to those services.",
        "noctafly": "This Pou has been deactivated to those services.",
        "qlw": "This Pou has been deactivated to those services.",
        "cyberattack": "This Pou has been deactivated to those services.",
        "themoroccan": "This Pou has been deactivated to those services.",    };
    nome = nome.toLowerCase();

    if (variaveiss.hasOwnProperty(nome)) {
        return variaveiss[nome];
    } else {
        return "I have no A.I, but this name is available!";
    }
}

// pros demais resultados:
document.getElementById('pesquisaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var resultadoDaPesquisa = pesquisarEmail(email);
    if (resultadoDaPesquisa !== "Email not found.") {
        // encontrado
        document.getElementById('resultadoDisponivel').style.display = 'block';
        document.getElementById('resultadoDisponivel').innerHTML = "Email is found: " + resultadoDaPesquisa;
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