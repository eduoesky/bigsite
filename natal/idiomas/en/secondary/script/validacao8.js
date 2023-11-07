document.getElementById("meuFormulariob").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const emailb = document.getElementById("campoEmailb").value.trim();
    
    const emailsBloqueadosb = ['oesky@oesky.me', 'oesky@gmail.com', 'pou@gmail.com'];
    const meuemailsBloqueadosb = ['oesamaeduardakynlia@gmail.com', 'oeskky@gmail.com'];
    const palavrasBloqueadasb = ['pou', 'pou_', 'haramhamster', 'qlw', 'Cyberattack'];

    const divErrob = document.getElementById("divErrob");
    divErrob.innerHTML = "";

    if (emailsBloqueadosb.includes(emailb) || palavrasBloqueadasb.some(palavra => emailb.includes(palavra))) {
        divErrob.innerHTML += "Blocked order... Try again<br>";
        return; // Retorna sem continuar as outras verificações
    }

    if (emailb.length < 15) {
        divErrob.innerHTML += "Email must have +15 characters!<br>";
        return; // Retorna sem continuar as outras verificações
    }

    if (meuemailsBloqueadosb.includes(emailb)) {
        divErrob.innerHTML += "It's my email *_*<br>";
        return; // Retorna sem continuar as outras verificações
    }

    if (!emailb.endsWith("@gmail.com")) {
        divErrob.innerHTML += "Are allowed only gmails *_*<br>";
        return; // Retorna sem continuar as outras verificações
    }

    // Se todas as verificações passarem, permita o envio do formulário
    this.submit();
});
