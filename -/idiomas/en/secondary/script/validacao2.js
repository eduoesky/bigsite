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
        divErro.innerHTML += "Form blocked... Try again<br>";
        e.preventDefault();
    }

    if (email.length < 15) {
        divErro.innerHTML += "Email must have +15 characters!<br>";
        e.preventDefault();
    }

    if (texto.length < 3 || texto.length > 15 || texto.startsWith('_') || texto.startsWith('.') || texto.includes('.')) {
        divErro.innerHTML += "Invalid Pou nickname<br>";
        e.preventDefault();
    }

    if (meuemailsBloqueados.includes(email)) {
        divErro.innerHTML += "This is my email *_*<br>";
        e.preventDefault();
    }

    if (!email.endsWith("@gmail.com")) {
        divErro.innerHTML += "Are allowed only gmails *_*<br>";
        e.preventDefault();
    }

    if (checkboxOutro.checked && mensagem === "") {
        divErrootr.innerHTML += "TYPE SOMETHING!!!!!<br>";
        e.preventDefault();
    }

    if (noctafly.includes(texto)) {
        divErro.innerHTML += "NocTaFly is no available to check."
        e.preventDefault();
    }

    if (cyberattack.includes(texto)) {
        divErro.innerHTML += "Cyberattack is no available to check."
        e.preventDefault();
    }

    if (pou2tiktok.includes(texto)) {
        divErro.innerHTML += "Pou2tiktok is no available to check."
        e.preventDefault();
    }

    if (meuspous.includes(texto)) {
        divErro.innerHTML += "You cannot to put my nicknames. You can be banned from this website!"
        e.preventDefault();
    }

    if (divErro.innerHTML !== "") {
        divErro.style.display = "block";
    } else {
        divErro.style.display = "none";
    }
});
