document.getElementById("form-edicao").addEventListener("submit", function (event) {
    event.preventDefault();

    const campoTextoEDIT = document.getElementById("campoTextoEDIT").value;
    const divErroEDIT = document.getElementById("divErroEDIT");
    const nomeCorrigidoInput = document.getElementById("nomeCorrigido");
    const meuTextarea = document.getElementById("meuTextarea");
    const nmerradoCheckbox = document.getElementById("nmerrado");
    const altfraseCheckbox = document.getElementById("altfrase");
    const eMailInput = document.getElementById("eMail");
    const altemailCheckbox = document.getElementById("altemail");
    const campoEmailEDIT = document.getElementById("campoEmailEDIT");
    const senhaTextarea = document.getElementById("Senha");

    const palavrasPermitidas = ['noctafly', 'qlw', 'pou2tiktok'];

    if (!palavrasPermitidas.includes(campoTextoEDIT.toLowerCase())) {
        divErroEDIT.textContent = 'The Pou you entered is not marked.';
        return false;
    }

    if (campoTextoEDIT === nomeCorrigidoInput.value) {
        divErroEDIT.textContent = 'The name you asked to be corrected is identical to the name marked on the bulletin board. Remember that uppercase and lowercase matter!';
        return false;
    }

    const frasesAssociadas = {
        'pou2tiktok': "I want the happiness of all players 😄",
        'noctafly': "With your like you will be part of my Pou",
        'qlw': "This is qLw Pou, from Indonesia ^_^ I wanted that my Pou to get TopLikes futurely 😃 🌟"
    };

    const fraseAssociada = frasesAssociadas[campoTextoEDIT.toLowerCase()];

    if (fraseAssociada && meuTextarea.value.trim().toLowerCase() === fraseAssociada.toLowerCase()) {
    divErroEDIT.textContent = `The inserted phrase is the same as Pou ${campoTextoEDIT} uses!`;
    return false;
    }

    const formasAceitas = ['NocTaFly', 'Pou2tiktok', 'qLw'];

    if (!formasAceitas.includes(campoTextoEDIT)) {
        divErroEDIT.textContent = 'This Pou was marked on the bulletin board, but not the way you typed it. Please check the bulletin board again and review the name of the marked Pou. Remember that uppercase and lowercase matter!';
    return false;
    }

const checkboxesIds = ['nmerrado', 'altfrase', 'delpou', 'altemail'];
const peloMenosUmaMarcada = checkboxesIds.some(id => document.getElementById(id).checked);

    if (!peloMenosUmaMarcada) {
        divErroEDIT.textContent = 'Select at least 1 option.';
    return false;
    }

    if (nmerradoCheckbox.checked && nomeCorrigidoInput.value.trim() === '') {
        divErroEDIT.textContent = 'Enter the name you want to correct!!!';
        return false;
    }

    if (altfraseCheckbox.checked && meuTextarea.value.trim() === '') {
        divErroEDIT.textContent = 'Type your phrase!!!';
        return false;
    }

    if (altemailCheckbox.checked && eMailInput.value.trim() === '') {
        divErroEDIT.textContent = 'Type your new email!!!';
        return false;   
    }

    if (nmerradoCheckbox.checked) {
        const nomeCorrigido = nomeCorrigidoInput.value.trim();

        if (nomeCorrigido.length < 3) {
            divErroEDIT.textContent = 'Pou nick is very short';
            return false;
        }

        if (nomeCorrigido.length > 15) {
            divErroEDIT.textContent = 'The Pou nick is so big';
            return false;
        }
    }

    if (altemailCheckbox.checked && eMailInput.value.trim().toLowerCase() === campoEmailEDIT.value.trim().toLowerCase()) {
        divErroEDIT.textContent = 'The emails cannot be the same *_*';
        return false;
    }

    if (altemailCheckbox.checked) {
        const emailValue = eMailInput.value.trim().toLowerCase();
    
        // Restrição 1: não pode ter menos que 15 caracteres
        if (emailValue.length < 15) {
            divErroEDIT.textContent = 'Email too short to be a valid email';
            return false;
        }
    
        // Restrição 2: aceitos apenas emails específicos
        const dominiosPermitidos = ['@gmail.com', '@yahoo.com', '@outlook.com', '@zolo.com'];
        const dominioValido = dominiosPermitidos.some(dominio => emailValue.endsWith(dominio));
    
        if (!dominioValido) {
            divErroEDIT.textContent = 'The email you entered seems to not exist... *_*';
            return false;
        }
    
        // Restrição 4: proibido de colocar emails específicos
        const emailsProibidos = ['oeskky@gmail.com', 'oesamaeduardakynlia@gmail.com'];
        if (emailsProibidos.includes(emailValue)) {
            divErroEDIT.textContent = 'This email has been banned in the marking method';
            return false;
        }
    }

    const emailProibido1 = 'oeskky@gmail.com';
    const emailProibido2 = 'oesamaeduardakynlia@gmail.com';

    // Verificar restrições para campoEmailEDIT
    const emailCampoEdit = campoEmailEDIT.value.trim().toLowerCase();
    if (emailCampoEdit.length < 15) {
        divErroEDIT.textContent = 'Email too short to be a valid email';
        return false;
    }

    const dominiosAceitos = ['@gmail.com', '@yahoo.com', '@outlook.com', '@zolo.com'];
    const dominioCampoEdit = dominiosAceitos.find(dominio => emailCampoEdit.endsWith(dominio));

    if (!dominioCampoEdit) {
        divErroEDIT.textContent = 'The email you entered seems to not exist... *_*';
        return false;
    }

    if (emailCampoEdit === emailProibido1 || emailCampoEdit === emailProibido2) {
        divErroEDIT.textContent = 'This email has been banned in the marking method.';
        return false;
    }

    const senhaCheckbox = document.getElementById('senha');
    const codigoCheckbox = document.getElementById('codigo');

    if (!senhaCheckbox.checked && !codigoCheckbox.checked) {
        divErroEDIT.textContent = 'Select the type of input: password or code?';
        return false;
    }

    const codigoTextarea = document.getElementById('codigoaparece');

    if (codigoCheckbox.checked && codigoTextarea.value.trim() === '') {
        divErroEDIT.textContent = 'Enter the code you generated during the marking of your Pou *_*';
        return false;
    }

    if (senhaCheckbox.checked) {
        if (senhaTextarea.value.trim() === '') {
            divErroEDIT.textContent = 'Type the passwrod that you registered!!';
            return false;
        }
    }

    divErroEDIT.textContent = '';

    this.submit();
});
