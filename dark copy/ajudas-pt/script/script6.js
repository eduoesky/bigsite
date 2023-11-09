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
        "oesky@gmail.com": "Meu nome não está disponível neste método!",
        "nicolasluiz@azul.com": "E-mail banido.",
        "diabo@666.com": "E-mail banido.",
        "pou@gmail.com": "E-mail muito usado, tente outro.",
        "oesky@hotmail.com": "Meu nome não está disponível neste método!",
        "pou@hotmail.com": "E-mail muito usado, tente outro.",
        "oesamaeduardakynlia@gmail.com": "Ah não, você sabe o meu e-mail?? *_*",
        "oesky@oesky.me": "Ah não, você sabe o meu e-mail?? *_*"
    };

    nome = nome.toLowerCase();

    if (variaveis.hasOwnProperty(nome)) {
        return variaveis[nome];
    } else {
        return "E-mail disponível!";
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
        "oesky": "Ups.. este nome é meu *_*",
        "games_uisa": "Pou banido.",
        "letmebanyou": "Pou banido.",
        "saurom_": "Pou banido.",
        "pou": "Este Pou é um topliker.",
        "pitufina_feliz": "Este Pou é um topliker.",
        "dbpaolo98": "Este Pou é um topliker.",
        "vera_no_pou": "Este Pou é um topliker.",
        "eltitochor_s3": "Este Pou é um topliker.",
        "miras": "Este Pou é um topliker, mas foi banido.",
        "n0_more_war": "Este Pou é um topliker.",
        "sexy_nepali": "Este Pou é um topliker.",
        "brasiill": "Este Pou é um topliker.",
        "awja": "Este Pou é um topliker.",
        "c_u_x_i_t_a_nph": "Este Pou é um topliker.",
        "sexypou": "Este Pou é um topliker.",
        "nuclear_winter": "Este Pou é um topliker.",
        "tanfall_ff": "Este Pou é um topliker.",
        "tanfall": "Este Pou é um topliker.",
        "violetta_4": "Este Pou é um topliker.",
        "beautiful": "Este Pou é um topliker.",
        "luisa_games": "Pou banido.",
        "mega_therioon": "Este Pou é um topliker.",
        "Pou2tiktok": "Este Pou foi desativado para estes serviços.",
        "noctafly": "Este Pou foi desativado para estes serviços.",
        "qlw": "Este Pou foi desativado para estes serviços.",
        "Cyberattack": "Este Pou foi desativado para estes serviços.",
        "themoroccan": "Este Pou foi desativado para estes serviços.",
        "Like_x1": "Ups.. este nome é meu *_*",
        
    };
    nome = nome.toLowerCase();

    if (variaveiss.hasOwnProperty(nome)) {
        return variaveiss[nome];
    } else {
        return "Não tenho inteligência artificial, mas este nome está disponível!";
    }
}

// pros demais resultados:
document.getElementById('pesquisaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var resultadoDaPesquisa = pesquisarEmail(email);
    if (resultadoDaPesquisa !== "Email não encontrado.") {
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