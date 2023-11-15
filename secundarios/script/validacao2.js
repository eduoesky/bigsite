document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmail").value.trim().toLowerCase();
    const texto = document.getElementById("campoTexto").value.trim().toLowerCase();
    const mensagem = document.getElementById("texto").value.trim().toLowerCase();
    const checkboxOutro = document.getElementById("outro");

    const emailsBloqueados = ['oesky@oesky.me', 'oesky@gmail.com', 'pou@gmail.com'];
    const meuemailsBloqueados = ['oesamaeduardakynlia@gmail.com', 'oeskky@gmail.com'];
    const palavrasBloqueadas = ['pou', 'pou_', 'haramhamster', 'qlw', 'Cyberattack'];
    const noctafly = ['noctafly'];
    const meuspous = ['oesky', 'like_x1'];
    const cyberattack = ['cyberattack'];
    const pou2tiktok = ['pou2tiktok'];

    const divErro = document.getElementById("divErro");
    divErro.innerHTML = "";
    const divErrootr = document.getElementById("divErroOutro");
    divErrootr.innerHTML = "";

    if (emailsBloqueados.includes(email) || palavrasBloqueadas.some(palavra => texto.includes(palavra))) {
        divErro.innerHTML += "Pedido bloqueado... Preencha novamente<br>";
        e.preventDefault();
    }

    if (email.length < 15) {
        divErro.innerHTML += "Email deve ter +15 caracteres!<br>";
        e.preventDefault();
    }

    if (texto.length < 3 || texto.length > 15 || texto.startsWith('_') || texto.startsWith('.') || texto.includes('.')) {
        divErro.innerHTML += "Nome Pou inválido<br>";
        e.preventDefault();
    }

    if (meuemailsBloqueados.includes(email)) {
        divErro.innerHTML += "Este email é meu *_*<br>";
        e.preventDefault();
    }

    if (!email.endsWith("@gmail.com")) {
        divErro.innerHTML += "São permitidos apenas gmails *_*<br>";
        e.preventDefault();
    }

    if (checkboxOutro.checked && mensagem === "") {
        divErrootr.innerHTML += "DIGITE ALGUMA COISA!!!!!<br>";
        e.preventDefault();
    }

    if (noctafly.includes(texto)) {
        divErro.innerHTML += "NocTaFly não está disponível para checar."
        e.preventDefault();
    }

    if (cyberattack.includes(texto)) {
        divErro.innerHTML += "Cyberattack não está disponível para checar."
        e.preventDefault();
    }

    if (pou2tiktok.includes(texto)) {
        divErro.innerHTML += "Pou2tiktok não está disponível para checar."
        e.preventDefault();
    }

    if (meuspous.includes(texto)) {
        divErro.innerHTML += "Não ouse colocar os meus próprios nomes. Você poderá ser banido!"
        e.preventDefault();
    }

    if (divErro.innerHTML !== "") {
        divErro.style.display = "block";
    } else {
        divErro.style.display = "none";
    }
});
