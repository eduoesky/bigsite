document.getElementById("meuFormulariob").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const emailb = document.getElementById("campoEmailb").value.trim();
    
    const emailsBloqueadosb = ['oesky@oesky.me', 'oesky@gmail.com', 'pou@gmail.com'];
    const meuemailsBloqueadosb = ['oesamaeduardakynlia@gmail.com', 'oeskky@gmail.com'];
    const palavrasBloqueadasb = ['pou', 'pou_', 'haramhamster', 'qlw', 'Cyberattack'];

    const divErrob = document.getElementById("divErrob");
    divErrob.innerHTML = "";

    if (emailsBloqueadosb.includes(emailb) || palavrasBloqueadasb.some(palavra => emailb.includes(palavra))) {
        divErrob.innerHTML += "Pedido bloqueado... Preencha novamente<br>";
        return;
    }

    if (emailb.length < 15) {
        divErrob.innerHTML += "Email deve ter +15 caracteres!<br>";
        return; 
    }

    if (meuemailsBloqueadosb.includes(emailb)) {
        divErrob.innerHTML += "Este email é meu *_*<br>";
        return;
    }

    if (!emailb.endsWith("@gmail.com")) {
        divErrob.innerHTML += "São permitidos apenas gmails *_*<br>";
        return;
    }

    this.submit();
});
