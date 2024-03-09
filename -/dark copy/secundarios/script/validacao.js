const emailsBloqueados = ['oesky@oesky.me', 'oeskky@gmail.com', 'oesky@gmail.com', 'pou@gmail.com',];
const palavrasBloqueadas = ['oesky', 'pou', 'pitufina_feliz', 'dbpaolo98', 'vera_no_pou', 'n0_m0re_war', 'miras', 'awja', 'beautiful', 'brasiill', 'sexy_nepali', 'sexypou', 'nuclear_winter', 'mega_therioon', 'pou_', 'saurom_', 'luisa_games', 'like_x1', 'kiitor', 'tanfall', 'tanfall_ff',];

document.getElementById("campoEmail").addEventListener("input", function () {
    const email = this.value.trim();
    if (emailsBloqueados.includes(email)) {
        document.getElementById("divErro").textContent = "Esse email não é permitido.";
        e.preventDefault();
    } else {
        document.getElementById("divErro").textContent = "";
    }
});

document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmail").value.trim();
    const texto = document.getElementById("campoTexto").value.trim().toLowerCase();

    if (emailsBloqueados.includes(email) || palavrasBloqueadas.some(palavra => texto.includes(palavra))) {
        document.getElementById("divErro").textContent = "Pedido bloqueado... Preencha novamente";
        e.preventDefault();
    }
});

document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmail").value.trim().toLowerCase();
    const emailsBloqueados = ['oeskky@gmail.com', 'oeskyoesky@gmail.com', 'oesamaeduardakynlia@gmail.com'];

    if (emailsBloqueados.includes(email)) {
        document.getElementById("divErro").textContent = "Esse email é meu *_*";
        e.preventDefault();
    } else if (email.length < 15 || !email.endsWith("@gmail.com")) {
        document.getElementById("divErro").textContent = "São permitidos apenas gmails *_*";
        e.preventDefault();
    } else {
        document.getElementById("divErro").textContent = "";
    }
});

document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const mensagem = document.getElementById("campoTexto").value.trim().toLowerCase();
    
    if (mensagem.length < 3 || mensagem.length > 15 || /^\d|\./.test(mensagem) || mensagem[0] === '_') {
        document.getElementById("divErro").textContent = "Nome Pou inválido";
        e.preventDefault();
    }    
});
    
document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmail").value.trim();
    
    if (email.length < 15) {
        document.getElementById("divErro").textContent = "Email deve ter +15 caracteres!";
        e.preventDefault();
    }
});

document.getElementById("correcaoFormulario").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var campoEmaill = document.getElementById("campoEmaill");
    var campoPalavras = document.getElementById("campoPalavras");
    var campoPalavras2 = document.getElementById("campoPalavras2");
    var divErrop = document.getElementById("divErrop");
  
    if (campoPalavras.value === campoPalavras2.value) {
      divErrop.textContent = "Os nomes são idênticos";
      e.preventDefault();
    }

    if (campoEmaill.value.length < 15) {
      divErrop.textContent = "O email precisa ter +15 caracteres";
      e.preventDefault();
    }

    if (/^[0-9.]/.test(campoEmaill.value)) {
      divErrop.textContent = "Não pode começar emails com números ou pontos *_*";
      e.preventDefault();
    }
  
    var emailsProibidos = ["oeskky@gmail.com", "oesamaeduardakynlia@gmail.com"];
    if (emailsProibidos.includes(campoEmaill.value)) {
      divErrop.textContent = "Esse email é meu *_*";
      e.preventDefault();
    }

    if (!campoEmaill.value.endsWith("@gmail.com")) {
        divErrop.textContent = "São permitidos apenas gmails *_*";
        e.preventDefault();
    }    

    var nomesProibidos = ["oesky", "like_x1", "noctafly", "haramhamster", "cyberattack", "pou2tiktok"];
    if (nomesProibidos.includes(campoPalavras.value) || nomesProibidos.includes(campoPalavras2.value)) {
      divErrop.textContent = "Pous não disponíveis para este método!";
      e.preventDefault();
    }
  
    this.submit();
  });
  