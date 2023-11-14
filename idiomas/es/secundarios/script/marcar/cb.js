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

    const palavrasPermitidas = ['noctafly', 'qlw', 'pou2tiktok', 'coki_818', 'cocoadolli', 'guaio_21', 'cyberattack', 'wither_do_rj', 'debappp_nfa', 'santababy01', 'lizzypeep', 'h401217', 'pou_irkm9j', 'pouicecreamrose'];

    if (!palavrasPermitidas.includes(campoTextoEDIT.toLowerCase())) {
        divErroEDIT.textContent = 'El Pou que justo escribiste no está marcado.';
        return false;
    }

    if (campoTextoEDIT === nomeCorrigidoInput.value) {
        divErroEDIT.textContent = 'El nombre que pidiste para ser corregido es igual al nombre que está marcado en el mural. ¡¡Recuérdate de que mayúsculas y minúsculas cuentan!!';
        return false;
    }

    const frasesAssociadas = {
        'pou2tiktok': "Quiero la felicidad de todos los jugadores 😄",
        'noctafly': "Con tu like harías parte de mi Pou",
        'qlw': "Ese es el Pou qLw, de Indonésia ^_^ Quisiera que mi Pou fuera un TopLiker futuramente 😃 🌟",
        'coki_818': "Soy pequeño en el pou y quisiera crecer, den like en mi Pou ^_^",
        'cocoadolli': "Pou es mi juego favorito y amo a mi poucita, visítenme allí 💕 💗 💘 💜",
        'guaio_21': "Hola, quiero ser famoso en el pou, da like en mi Pou, mi nombre es guaio_21 🌟",
        'cyberattack': "¡Hola pous! Soy Cyberattack (mi nombre real es Ena), soy de Croacia y ¡amo a mis amigos! 🇭🇷 🌠",
        'wither_do_rj': "Mientras pensabas en un Pou que era uno de los más bonitos de la historia, yo estaba allí en el podio.        Soy de Brasil 🇧🇷 🇧🇷 🇧🇷",
        'debappp_nfa': "Hola a todos los pous, quiero que se diviertan y jueguen conmigo cuando puedan. Abrazos ❤️ ❤️ ❤️",
        'santababy01': "Gracias Oesky por la oportunidad de promocionar a mi Pouzinha diva, ella es parte de mi vida y realmente quiero que me represente.",
        'lizzypeep': "Lo sentís, no tengo una frase, pero me gustaría ser compartida para obtener más likers interesantes 🌙",
        'h401217': "Me gusta jugar a Food Swap, puedes pedirme una partida de Tic Tac Pou. Mi otro pou es H40dev 🇵🇪"
    };

    const fraseAssociada = frasesAssociadas[campoTextoEDIT.toLowerCase()];

    if (fraseAssociada && meuTextarea.value.trim().toLowerCase() === fraseAssociada.toLowerCase()) {
    divErroEDIT.textContent = `¡La frase insertada es igual a que el Pou ${campoTextoEDIT} usa!`;
    return false;
    }

    const formasAceitas = ['NocTaFly', 'Pou2tiktok', 'qLw', 'Coki_818', 'cocoadolli', 'guaio_21', 'Cyberattack', 'Wither_DO_RJ', 'debappp_nfa', 'SantaBaby01', 'LizzyPeep', 'pou_IRKM9J', 'H401217', 'PouIceCreamRose'];

    if (!formasAceitas.includes(campoTextoEDIT)) {
        divErroEDIT.textContent = 'Ese Pou fue marcado en el mural, pero no de la forma como escribiste. Vee el mural más una vez y revee el nombre del Pou que fue marcado. Recuerda que mayúsculas y minúsculas cuentan!';
    return false;
    }

const checkboxesIds = ['nmerrado', 'altfrase', 'delpou', 'altemail'];
const peloMenosUmaMarcada = checkboxesIds.some(id => document.getElementById(id).checked);

    if (!peloMenosUmaMarcada) {
        divErroEDIT.textContent = 'Marca al menos 1 opción.';
    return false;
    }

    if (nmerradoCheckbox.checked && nomeCorrigidoInput.value.trim() === '') {
        divErroEDIT.textContent = '¡¡¡Escribe el nombre que quieres corregir!!!';
        return false;
    }

    if (altfraseCheckbox.checked && meuTextarea.value.trim() === '') {
        divErroEDIT.textContent = '¡¡¡Escribe tu frase!!!';
        return false;
    }

    if (altemailCheckbox.checked && eMailInput.value.trim() === '') {
        divErroEDIT.textContent = '¡¡¡Escribe tu nuevo email!!!';
        return false;   
    }

    if (nmerradoCheckbox.checked) {
        const nomeCorrigido = nomeCorrigidoInput.value.trim();

        if (nomeCorrigido.length < 3) {
            divErroEDIT.textContent = 'Nombre del Pou muy pequeño';
            return false;
        }

        if (nomeCorrigido.length > 15) {
            divErroEDIT.textContent = 'Nombre del Pou muy largo';
            return false;
        }
    }

    if (altemailCheckbox.checked && eMailInput.value.trim().toLowerCase() === campoEmailEDIT.value.trim().toLowerCase()) {
        divErroEDIT.textContent = 'Los emails no pueden ser iguales *_*';
        return false;
    }

    if (altemailCheckbox.checked) {
        const emailValue = eMailInput.value.trim().toLowerCase();
    
        if (emailValue.length < 15) {
            divErroEDIT.textContent = 'Email muy corto para ser un email válido';
            return false;
        }
    
        const dominiosPermitidos = ['@gmail.com', '@yahoo.com', '@outlook.com', '@zolo.com'];
        const dominioValido = dominiosPermitidos.some(dominio => emailValue.endsWith(dominio));
    
        if (!dominioValido) {
            divErroEDIT.textContent = 'Creo que el email que escribiste no existe... *_*';
            return false;
        }
    
        // Restrição 4: proibido de colocar emails específicos
        const emailsProibidos = ['oeskky@gmail.com', 'oesamaeduardakynlia@gmail.com'];
        if (emailsProibidos.includes(emailValue)) {
            divErroEDIT.textContent = 'Ese email fue proibido en el método de marcación';
            return false;
        }
    }

    const emailProibido1 = 'oeskky@gmail.com';
    const emailProibido2 = 'oesamaeduardakynlia@gmail.com';

    // Verificar restrições para campoEmailEDIT
    const emailCampoEdit = campoEmailEDIT.value.trim().toLowerCase();
    if (emailCampoEdit.length < 15) {
        divErroEDIT.textContent = 'Email muy corto para ser un email válido';
        return false;
    }

    const dominiosAceitos = ['@gmail.com', '@yahoo.com', '@outlook.com', '@zolo.com'];
    const dominioCampoEdit = dominiosAceitos.find(dominio => emailCampoEdit.endsWith(dominio));

    if (!dominioCampoEdit) {
        divErroEDIT.textContent = 'Creo que el email que escribiste no existe... *_*';
        return false;
    }

    if (emailCampoEdit === emailProibido1 || emailCampoEdit === emailProibido2) {
        divErroEDIT.textContent = 'Estos emails fueron proibidos en el método de marcación';
        return false;
    }

    const senhaCheckbox = document.getElementById('senha');
    const codigoCheckbox = document.getElementById('codigo');

    if (!senhaCheckbox.checked && !codigoCheckbox.checked) {
        divErroEDIT.textContent = 'Selecciona el tipo de entrada: contraseña o código?';
        return false;
    }

    const codigoTextarea = document.getElementById('codigoaparece');

    if (codigoCheckbox.checked && codigoTextarea.value.trim() === '') {
        divErroEDIT.textContent = 'Escribe el código que generaste durante la marcación de tu Pou *_*';
        return false;
    }

    if (senhaCheckbox.checked) {
        if (senhaTextarea.value.trim() === '') {
            divErroEDIT.textContent = '¡¡Escribe la contraseña que registró!!';
            return false;
        }
    }

    divErroEDIT.textContent = '';

    this.submit();
});
