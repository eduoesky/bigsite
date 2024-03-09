const emailsBloqueados = ['oesky@oesky.me', 'oeskky@gmail.com', 'oesky@gmail.com', 'pou@gmail.com',];
const palavrasBloqueadas = ['oesky', 'pou', 'pitufina_feliz', 'dbpaolo98', 'vera_no_pou', 'n0_m0re_war', 'miras', 'awja', 'beautiful', 'brasiill', 'sexy_nepali', 'sexypou', 'nuclear_winter', 'mega_therioon', 'pou_', 'saurom_', 'luisa_games', 'like_x1', 'kiitor', 'tanfall', 'tanfall_ff',];

document.getElementById("campoEmail").addEventListener("input", function () {
    const email = this.value.trim();
    if (emailsBloqueados.includes(email)) {
        document.getElementById("divErro").textContent = "Este email no es permitido.";
        e.preventDefault();
    } else {
        document.getElementById("divErro").textContent = "";
    }
});

document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmail").value.trim();
    const texto = document.getElementById("campoTexto").value.trim().toLowerCase();

    if (emailsBloqueados.includes(email) || palavrasBloqueadas.some(palavra => texto.includes(palavra))) {
        document.getElementById("divErro").textContent = "Pedido bloqueado... Vuelva a llenar";
        e.preventDefault();
    }
});

document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmail").value.trim().toLowerCase(); // Converter para minúsculas
    
    const emailsBloqueados = ['oeskky@gmail.com', 'oeskyoesky@gmail.com', 'oesamaeduardakynlia@gmail.com'];

    if (emailsBloqueados.includes(email)) {
        document.getElementById("divErro").textContent = "Ese email es mio *_*";
        e.preventDefault();
    } else if (email.length < 15 || !email.endsWith("@gmail.com")) {
        document.getElementById("divErro").textContent = "Son permitidos sólo gmails *_*";
        e.preventDefault();
    } else {
        document.getElementById("divErro").textContent = "";
    }
});

document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const mensagem = document.getElementById("campoTexto").value.trim().toLowerCase();
    
    if (mensagem.length < 3 || mensagem.length > 15 || /^\d|\./.test(mensagem) || mensagem[0] === '_') {
        document.getElementById("divErro").textContent = "Nombre de Pou inválido";
        e.preventDefault();
    }    
});
    
document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmail").value.trim();
    
    if (email.length < 15) {
        document.getElementById("divErro").textContent = "Email debe tener +15 caracteres!";
        e.preventDefault();
    }
});

document.getElementById("correcaoFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio automático do formulário
  
    var campoEmaill = document.getElementById("campoEmaill");
    var campoPalavras = document.getElementById("campoPalavras");
    var campoPalavras2 = document.getElementById("campoPalavras2");
    var divErrop = document.getElementById("divErrop");
  
    // Verificar se os nomes são idênticos
    if (campoPalavras.value === campoPalavras2.value) {
      divErrop.textContent = "Los dos nombres son iguales";
      e.preventDefault();
    }
  
    // Verificar se o email tem pelo menos 15 caracteres
    if (campoEmaill.value.length < 15) {
      divErrop.textContent = "El email necesita tener +15 caracteres";
      e.preventDefault();
    }
  
    // Verificar se o email começa com números ou pontos
    if (/^[0-9.]/.test(campoEmaill.value)) {
      divErrop.textContent = "No se puede comenzar emails con números o puntos *_*";
      e.preventDefault();
    }
  
    // Proibir emails específicos
    var emailsProibidos = ["oeskky@gmail.com", "oesamaeduardakynlia@gmail.com"];
    if (emailsProibidos.includes(campoEmaill.value)) {
      divErrop.textContent = "Ese email es mio *_*";
      e.preventDefault();
    }

    if (!campoEmaill.value.endsWith("@gmail.com")) {
        divErrop.textContent = "Son permitidos sólo gmails *_*";
        e.preventDefault();
    }    
  
    // Proibir nomes específicos
    var nomesProibidos = ["oesky", "like_x1", "noctafly", "haramhamster", "cyberattack", "pou2tiktok"];
    if (nomesProibidos.includes(campoPalavras.value) || nomesProibidos.includes(campoPalavras2.value)) {
      divErrop.textContent = "Pou no disponible para este método!";
      e.preventDefault();
    }
  
    // Se todas as verificações passaram, você pode prosseguir com o envio do formulário
    this.submit();
  });
  