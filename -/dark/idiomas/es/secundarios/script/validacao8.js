document.getElementById("meuFormulariob").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const emailb = document.getElementById("campoEmailb").value.trim();
    
    const emailsBloqueadosb = ['oesky@oesky.me', 'oesky@gmail.com', 'pou@gmail.com'];
    const meuemailsBloqueadosb = ['oesamaeduardakynlia@gmail.com', 'oeskky@gmail.com'];
    const palavrasBloqueadasb = ['pou', 'pou_', 'haramhamster', 'qlw', 'Cyberattack'];

    const divErrob = document.getElementById("divErrob");
    divErrob.innerHTML = "";

    if (emailsBloqueadosb.includes(emailb) || palavrasBloqueadasb.some(palavra => emailb.includes(palavra))) {
        divErrob.innerHTML += "Pedido bloqueado... Vuelva a llenar<br>";
        return;
    }

    if (emailb.length < 15) {
        divErrob.innerHTML += "Email debe tener +15 caracteres!<br>";
        return;
    }

    if (meuemailsBloqueadosb.includes(emailb)) {
        divErrob.innerHTML += "Este email es mio *_*<br>";
        return;
    }

    if (!emailb.endsWith("@gmail.com")) {
        divErrob.innerHTML += "Son permitidos sólo gmails *_*<br>";
        return;
    }

    this.submit();
});
