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
        divErroEDIT.textContent = 'O Pou que você digitou não está marcado.';
        return false;
    }

    if (campoTextoEDIT === nomeCorrigidoInput.value) {
        divErroEDIT.textContent = 'O nome que você pediu para ser corrigido é idêntico ao nome que está marcado no mural. Lembre-se de que maiúsculas e minúsculas contam!!';
        return false;
    }

    const frasesAssociadas = {
        'pou2tiktok': "Quero a felicidade de todos os jogadores 😄",
        'noctafly': "Com o seu like você faria parte do meu Pou",
        'qlw': "Esse é o Pou qLw, da Indonésia ^_^ Eu queria que meu Pou seja um TopLiker futuramente 😃 🌟"
    };

    const fraseAssociada = frasesAssociadas[campoTextoEDIT.toLowerCase()];

    if (fraseAssociada && meuTextarea.value.trim().toLowerCase() === fraseAssociada.toLowerCase()) {
    divErroEDIT.textContent = `A frase inserida é a mesma que o Pou ${campoTextoEDIT} usa!`;
    return false;
    }

    const formasAceitas = ['NocTaFly', 'Pou2tiktok', 'qLw'];

    if (!formasAceitas.includes(campoTextoEDIT)) {
        divErroEDIT.textContent = 'Esse Pou foi marcado no mural, mas não da forma como você digitou. Veja o mural mais uma vez e reveja o nome do Pou que foi marcado. Lembre-se de que maiúsculas e minúsculas contam!';
    return false;
    }

const checkboxesIds = ['nmerrado', 'altfrase', 'delpou', 'altemail'];
const peloMenosUmaMarcada = checkboxesIds.some(id => document.getElementById(id).checked);

    if (!peloMenosUmaMarcada) {
        divErroEDIT.textContent = 'Marque ao menos 1 opção.';
    return false;
    }

    if (nmerradoCheckbox.checked && nomeCorrigidoInput.value.trim() === '') {
        divErroEDIT.textContent = 'Digite o nome que você quer corrigir!!!';
        return false;
    }

    if (altfraseCheckbox.checked && meuTextarea.value.trim() === '') {
        divErroEDIT.textContent = 'Digite a sua frase!!!';
        return false;
    }

    if (altemailCheckbox.checked && eMailInput.value.trim() === '') {
        divErroEDIT.textContent = 'Digite o novo email!!!';
        return false;   
    }

    if (nmerradoCheckbox.checked) {
        const nomeCorrigido = nomeCorrigidoInput.value.trim();

        if (nomeCorrigido.length < 3) {
            divErroEDIT.textContent = 'Nome do Pou muito curto';
            return false;
        }

        if (nomeCorrigido.length > 15) {
            divErroEDIT.textContent = 'Nome do Pou muito longo';
            return false;
        }
    }

    if (altemailCheckbox.checked && eMailInput.value.trim().toLowerCase() === campoEmailEDIT.value.trim().toLowerCase()) {
        divErroEDIT.textContent = 'Os emails não podem ser iguais *_*';
        return false;
    }

    if (altemailCheckbox.checked) {
        const emailValue = eMailInput.value.trim().toLowerCase();
    
        // Restrição 1: não pode ter menos que 15 caracteres
        if (emailValue.length < 15) {
            divErroEDIT.textContent = 'Email muito curto para ser um email válido';
            return false;
        }
    
        // Restrição 2: aceitos apenas emails específicos
        const dominiosPermitidos = ['@gmail.com', '@yahoo.com', '@outlook.com', '@zolo.com'];
        const dominioValido = dominiosPermitidos.some(dominio => emailValue.endsWith(dominio));
    
        if (!dominioValido) {
            divErroEDIT.textContent = 'O email que você digitou parece que não existe... *_*';
            return false;
        }
    
        // Restrição 4: proibido de colocar emails específicos
        const emailsProibidos = ['oeskky@gmail.com', 'oesamaeduardakynlia@gmail.com'];
        if (emailsProibidos.includes(emailValue)) {
            divErroEDIT.textContent = 'Esse email foi proibido no método de marcação';
            return false;
        }
    }

    const emailProibido1 = 'oeskky@gmail.com';
    const emailProibido2 = 'oesamaeduardakynlia@gmail.com';

    // Verificar restrições para campoEmailEDIT
    const emailCampoEdit = campoEmailEDIT.value.trim().toLowerCase();
    if (emailCampoEdit.length < 15) {
        divErroEDIT.textContent = 'Email muito curto para ser um email válido';
        return false;
    }

    const dominiosAceitos = ['@gmail.com', '@yahoo.com', '@outlook.com', '@zolo.com'];
    const dominioCampoEdit = dominiosAceitos.find(dominio => emailCampoEdit.endsWith(dominio));

    if (!dominioCampoEdit) {
        divErroEDIT.textContent = 'O email que você digitou parece que não existe... *_*';
        return false;
    }

    if (emailCampoEdit === emailProibido1 || emailCampoEdit === emailProibido2) {
        divErroEDIT.textContent = 'Esses emails foram proibidos no método de marcação';
        return false;
    }

    const senhaCheckbox = document.getElementById('senha');
    const codigoCheckbox = document.getElementById('codigo');

    if (!senhaCheckbox.checked && !codigoCheckbox.checked) {
        divErroEDIT.textContent = 'Selecione o tipo de entrada: senha ou código?';
        return false;
    }

    const codigoTextarea = document.getElementById('codigoaparece');

    if (codigoCheckbox.checked && codigoTextarea.value.trim() === '') {
        divErroEDIT.textContent = 'Digite o código que você gerou durante a marcação do seu Pou *_*';
        return false;
    }

    if (senhaCheckbox.checked) {
        if (senhaTextarea.value.trim() === '') {
            divErroEDIT.textContent = 'Digite a senha que você cadastrou!!';
            return false;
        }
    }

    divErroEDIT.textContent = '';

    this.submit();
});
