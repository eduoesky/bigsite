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
        divErro.innerHTML += "Pedido bloqueado... Vuelva a llenar<br>";
        e.preventDefault();
    }

    if (email.length < 15) {
        divErro.innerHTML += "Email debe tener +15 caracteres!<br>";
        e.preventDefault();
    }

    if (texto.length < 3 || texto.length > 15 || texto.startsWith('_') || texto.startsWith('.') || texto.includes('.')) {
        divErro.innerHTML += "Nombre de Pou inválido<br>";
        e.preventDefault();
    }

    if (meuemailsBloqueados.includes(email)) {
        divErro.innerHTML += "Este email es mio *_*<br>";
        e.preventDefault();
    }

    if (!email.endsWith("@gmail.com")) {
        divErro.innerHTML += "Son permitidos sólo gmails *_*<br>";
        e.preventDefault();
    }

    if (checkboxOutro.checked && mensagem === "") {
        divErrootr.innerHTML += "¡¡¡ESCRIBE ALGUNA COSA!!!<br>";
        e.preventDefault();
    }

    if (noctafly.includes(texto)) {
        divErro.innerHTML += "NocTaFly no está disponible para la verificación."
        e.preventDefault();
    }

    if (cyberattack.includes(texto)) {
        divErro.innerHTML += "Cyberattack no está disponible para la verificación."
        e.preventDefault();
    }

    if (pou2tiktok.includes(texto)) {
        divErro.innerHTML += "Pou2tiktok no está disponible para la verificación."
        e.preventDefault();
    }

    if (meuspous.includes(texto)) {
        divErro.innerHTML += "No te atrevas a poner mis propios nombres. ¡Puedes ser baneado del sitio!"
        e.preventDefault();
    }

    if (divErro.innerHTML !== "") {
        divErro.style.display = "block";
    } else {
        divErro.style.display = "none";
    }
});
