document.getElementById("marcarpou").addEventListener("submit", function (event) {
    event.preventDefault();

    const divErroCheckbox = document.getElementById('divErro6');
    const senhaCheckbox = document.getElementById('senha');
    const codigoCheckbox = document.getElementById('codigo');

    if (!senhaCheckbox.checked && !codigoCheckbox.checked) {
        divErroCheckbox.textContent = 'Select the type of input: password or code?';
        return false;
    } else {
        divErroCheckbox.textContent = '';
    }

    const emailInput = document.getElementById('campoEmail');
    const divErroEmail = document.getElementById('divErro6');
    const emailValue = emailInput.value.trim().toLowerCase();

    if (emailValue.length < 6) {
        divErroEmail.textContent = 'Invalid email because it is very short';
        return false;
    }

    const dominiosPermitidos = ['gmail.com', 'outlook.com', 'yahoo.com', 'zolo.com', 'hotmail.com'];
    const dominio = emailValue.split('@')[1];
    if (!dominiosPermitidos.includes(dominio)) {
        divErroEmail.textContent = 'The email you entered seems to not exist. Try to use a real email!';
        return false;
    }

    if (emailValue.startsWith('.') || emailValue.includes('.@') || emailValue.includes('@.') || emailValue.includes('..')) {
        divErroEmail.textContent = 'Invalid email';
        return false;
    }

    if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailValue)) {
        divErroEmail.textContent = 'Invalid email';
        return false;
    }

    const emailsProibidos = ['oeskky@gmail.com', 'oesamaeduardakynlia@gmail.com'];
    if (emailsProibidos.includes(emailValue)) {
        divErroEmail.textContent = 'This email its my *_*';
        return false;
    }

    divErroEmail.textContent = '';

    const campoTexto = document.getElementById('campoTexto');
    const divErroTexto = document.getElementById('divErro6');
    const nomePou = campoTexto.value;

    if (nomePou.length < 3 || nomePou.length > 15 || /[^a-zA-Z0-9_]/.test(nomePou) || /^[^a-zA-Z]/.test(nomePou) || /^[0-9_]/.test(nomePou)) {
        divErroTexto.textContent = 'Invalid Pou nick';
        event.preventDefault();
        return;
    }

    const pousProibidos = ['oesky'];
    if (pousProibidos.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = '"OesKy" its me *_*';
        event.preventDefault();
        return;
    }

    const pouProibidos = ['like_x1'];
    if (pouProibidos.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = '"Like_x1" its me *_*';
        event.preventDefault();
        return;
    }

    const pousMarcados = ['noctafly', 'qlw', 'pou2tiktok'];
    if (pousMarcados.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = 'The Pou that you typed already has been marked in the panel.';
        event.preventDefault();
        return;
    }

    divErroTexto.textContent = '';

    const codigoTextarea = document.getElementById('codigoaparece');
    const divErroTextarea = document.getElementById('divErro6');

    if (codigoCheckbox.checked && codigoTextarea.value.trim() === '') {
        divErroTextarea.textContent = 'Generate a code to continue....';
        return false;
    }

    divErroTextarea.textContent = '';
    const senhaTextarea = document.getElementById('Senha');
    const campoTextoInput = document.getElementById('campoTexto');
    const campoTexto2Input = document.getElementById('campoTexto2');
    
    if (campoTextoInput.value.trim() !== campoTexto2Input.value.trim()) {
        divErroTextarea.textContent = 'The nicks are not the same :3';
        return false;
    }

    if (senhaCheckbox.checked) {

        if (senhaTextarea.value.trim().toLowerCase() === campoTextoInput.value.trim().toLowerCase()) {
            divErroTextarea.textContent = 'Dont put in the password yourself name!';
            return false;
        }

        if (senhaTextarea.value.trim() === '') {
            divErroTextarea.textContent = 'PUT A PASSWORD!!!';
            return false;
        }
    }

    divErroTextarea.textContent = '';

    const meuTextarea = document.getElementById('meuTextarea');

    const palavrasProibidas = ['palavra1', 'palavra2', 'palavra3'];
    const textoLowerCase = meuTextarea.value.toLowerCase();
    
    for (const palavraProibida of palavrasProibidas) {
        if (textoLowerCase.includes(palavraProibida)) {
            divErroTextarea.textContent = 'No type bad words :(';
            return false;
        }
    }

    const emojisEnviados = (meuTextarea.value.match(/😀/g) || []).length;
    if (emojisEnviados > 9) {
        divErroTextarea.textContent = 'Its possible to submit until 9 emojis!';
        return false;
    }

    divErroTextarea.textContent = '';

    this.submit();
});
