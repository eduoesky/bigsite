document.getElementById("marcarpou").addEventListener("submit", function (event) {
    event.preventDefault();

    const divErroCheckbox = document.getElementById('divErro6');
    const senhaCheckbox = document.getElementById('senha');
    const codigoCheckbox = document.getElementById('codigo');

    if (!senhaCheckbox.checked && !codigoCheckbox.checked) {
        divErroCheckbox.textContent = 'Selecciona el tipo de entrada: contraseña o código?';
        return false;
    } else {
        divErroCheckbox.textContent = '';
    }

    const emailInput = document.getElementById('campoEmail');
    const divErroEmail = document.getElementById('divErro6');
    const emailValue = emailInput.value.trim().toLowerCase();

    if (emailValue.length < 6) {
        divErroEmail.textContent = 'Email es inválido por ser muy corto';
        return false;
    }

    const dominiosPermitidos = ['gmail.com', 'outlook.com', 'yahoo.com', 'zolo.com', 'hotmail.com'];
    const dominio = emailValue.split('@')[1];
    if (!dominiosPermitidos.includes(dominio)) {
        divErroEmail.textContent = 'Creo que este email que escribiste no existe. ¡Intenta poner un email real!';
        return false;
    }

    if (emailValue.startsWith('.') || emailValue.includes('.@') || emailValue.includes('@.') || emailValue.includes('..')) {
        divErroEmail.textContent = 'Email inválido';
        return false;
    }

    if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailValue)) {
        divErroEmail.textContent = 'Email inválido';
        return false;
    }

    const emailsProibidos = ['oeskky@gmail.com', 'oesamaeduardakynlia@gmail.com'];
    if (emailsProibidos.includes(emailValue)) {
        divErroEmail.textContent = 'Ese email es mio *_*';
        return false;
    }

    divErroEmail.textContent = '';

    const campoTexto = document.getElementById('campoTexto');
    const divErroTexto = document.getElementById('divErro6');
    const nomePou = campoTexto.value;

    if (nomePou.length < 3 || nomePou.length > 15 || /[^a-zA-Z0-9_]/.test(nomePou) || /^[^a-zA-Z]/.test(nomePou) || /^[0-9_]/.test(nomePou)) {
        divErroTexto.textContent = 'Nombre de Pou inválido';
        event.preventDefault();
        return;
    }

    const pousProibidos = ['oesky'];
    if (pousProibidos.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = '"OesKy" soy yo *_*';
        event.preventDefault();
        return;
    }

    const pouProibidos = ['like_x1'];
    if (pouProibidos.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = '"Like_x1" soy yo *_*';
        event.preventDefault();
        return;
    }

    const pousMarcados = ['noctafly', 'qlw', 'pou2tiktok'];
    if (pousMarcados.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = 'El Pou que escribiste ya fue marcado en el mural.';
        event.preventDefault();
        return;
    }

    divErroTexto.textContent = '';

    const codigoTextarea = document.getElementById('codigoaparece');
    const divErroTextarea = document.getElementById('divErro6');

    if (codigoCheckbox.checked && codigoTextarea.value.trim() === '') {
        divErroTextarea.textContent = 'Genera un código para continuar....';
        return false;
    }

    divErroTextarea.textContent = '';
    const senhaTextarea = document.getElementById('Senha');
    const campoTextoInput = document.getElementById('campoTexto');
    const campoTexto2Input = document.getElementById('campoTexto2');
    
    if (campoTextoInput.value.trim() !== campoTexto2Input.value.trim()) {
        divErroTextarea.textContent = 'Los nomes no son iguales :3';
        return false;
    }

    if (senhaCheckbox.checked) {

        if (senhaTextarea.value.trim().toLowerCase() === campoTextoInput.value.trim().toLowerCase()) {
            divErroTextarea.textContent = '¡No pone tu contraseña con tu proprio nombre!';
            return false;
        }

        if (senhaTextarea.value.trim() === '') {
            divErroTextarea.textContent = 'PONE UNA CONTRASEÑA!!!';
            return false;
        }
    }

    divErroTextarea.textContent = '';

    const meuTextarea = document.getElementById('meuTextarea');

    const palavrasProibidas = ['palavra1', 'palavra2', 'palavra3'];
    const textoLowerCase = meuTextarea.value.toLowerCase();
    
    for (const palavraProibida of palavrasProibidas) {
        if (textoLowerCase.includes(palavraProibida)) {
            divErroTextarea.textContent = 'No escribe palabrotas :(';
            return false;
        }
    }

    const emojisEnviados = (meuTextarea.value.match(/😀/g) || []).length;
    if (emojisEnviados > 9) {
        divErroTextarea.textContent = 'Es posible enviar hasta 9 emojis!';
        return false;
    }

    divErroTextarea.textContent = '';

    this.submit();
});
