document.getElementById("marcarpou").addEventListener("submit", function (event) {
    event.preventDefault();

    const divErroCheckbox = document.getElementById('divErro6');
    const senhaCheckbox = document.getElementById('senha');
    const codigoCheckbox = document.getElementById('codigo');

    if (!senhaCheckbox.checked && !codigoCheckbox.checked) {
        divErroCheckbox.textContent = 'Selecione o tipo de entrada: senha ou código?';
        return false;
    } else {
        divErroCheckbox.textContent = '';
    }

    const emailInput = document.getElementById('campoEmail');
    const divErroEmail = document.getElementById('divErro6');
    const emailValue = emailInput.value.trim().toLowerCase();

    if (emailValue.length < 6) {
        divErroEmail.textContent = 'Email é inválido por ser muito curto';
        return false;
    }

    const dominiosPermitidos = ['gmail.com', 'outlook.com', 'yahoo.com', 'zolo.com', 'hotmail.com'];
    const dominio = emailValue.split('@')[1];
    if (!dominiosPermitidos.includes(dominio)) {
        divErroEmail.textContent = 'Este email parece que não existe. Tente usar um email real!';
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
        divErroEmail.textContent = 'Esse email é meu *_*';
        return false;
    }

    divErroEmail.textContent = '';

    const campoTexto = document.getElementById('campoTexto');
    const divErroTexto = document.getElementById('divErro6');
    const nomePou = campoTexto.value;

    if (nomePou.length < 3 || nomePou.length > 15 || /[^a-zA-Z0-9_]/.test(nomePou) || /^[^a-zA-Z]/.test(nomePou) || /^[0-9_]/.test(nomePou)) {
        divErroTexto.textContent = 'Nome do Pou inválido';
        event.preventDefault();
        return;
    }

    const pousProibidos = ['oesky'];
    if (pousProibidos.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = '"OesKy" sou eu *_*';
        event.preventDefault();
        return;
    }

    const pouProibidos = ['like_x1'];
    if (pouProibidos.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = '"Like_x1" sou eu *_*';
        event.preventDefault();
        return;
    }

    const pousMarcados = ['noctafly', 'qlw', 'pou2tiktok'];
    if (pousMarcados.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = 'O Pou que você digitou já foi marcado no mural.';
        event.preventDefault();
        return;
    }

    divErroTexto.textContent = '';

    const codigoTextarea = document.getElementById('codigoaparece');
    const divErroTextarea = document.getElementById('divErro6');

    if (codigoCheckbox.checked && codigoTextarea.value.trim() === '') {
        divErroTextarea.textContent = 'Gere um código para continuar....';
        return false;
    }

    divErroTextarea.textContent = '';
    const senhaTextarea = document.getElementById('Senha');
    const campoTextoInput = document.getElementById('campoTexto');
    const campoTexto2Input = document.getElementById('campoTexto2');
    
    if (campoTextoInput.value.trim() !== campoTexto2Input.value.trim()) {
        divErroTextarea.textContent = 'Os nomes não estão iguais :3';
        return false;
    }

    if (senhaCheckbox.checked) {

        if (senhaTextarea.value.trim().toLowerCase() === campoTextoInput.value.trim().toLowerCase()) {
            divErroTextarea.textContent = 'Não coloque a senha com o seu próprio nome!';
            return false;
        }

        if (senhaTextarea.value.trim() === '') {
            divErroTextarea.textContent = 'COLOQUE UMA SENHA!!!';
            return false;
        }
    }

    divErroTextarea.textContent = '';

    const meuTextarea = document.getElementById('meuTextarea');

    const palavrasProibidas = ['palavra1', 'palavra2', 'palavra3'];
    const textoLowerCase = meuTextarea.value.toLowerCase();
    
    for (const palavraProibida of palavrasProibidas) {
        if (textoLowerCase.includes(palavraProibida)) {
            divErroTextarea.textContent = 'Não digite palavrões :(';
            return false;
        }
    }

    const emojisEnviados = (meuTextarea.value.match(/😀/g) || []).length;
    if (emojisEnviados > 9) {
        divErroTextarea.textContent = 'É possível enviar até 9 emojis!';
        return false;
    }

    divErroTextarea.textContent = '';

    this.submit();
});
