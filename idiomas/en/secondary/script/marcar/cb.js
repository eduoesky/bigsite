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

    const palavrasPermitidas = ['noctafly', 'qlw', 'pou2tiktok', 'coki_818', 'cocoadolli', 'guaio_21', 'cyberattack', 'wither_do_rj', 'debappp_nfa', 'santababy01', 'lizzypeep', 'h401217', 'pou_irkm9j', 'pouicecreamrose', 'toolboxlikes', 'pou_9veif0', 'chaeyeot', 'rafaellll', 'lizardo13', 'dahzz', 'fachipou2013', 'letmebanyou', 'trendy_winter', 'issosimple', 'olapaa', 'like_x11', 'nachito_2019', 'tempestes', 'ketotzz', 'aqua_nando', 'a_r_e_a'];

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
        'qlw': "This is qLw Pou, from Indonesia ^_^ I wanted that my Pou to get TopLikes futurely 😃 🌟",
        'coki_818': "I'm small on Pou and wanted to grow, give a like to my Pou ^_^",
        'cocoadolli': "Pou is my favorite game, and I love my little Pou, visit me there 💕 💗 💘 💜",
        'guaio_21': "Hi, I want to be famous on Pou, give a like to my Pou, my name is guaio_21 🌟",
        'cyberattack': "Hey pous! I'm Cyberattack (real name is Ena), I am from Croatia, and I love my friends! 🇭🇷 🌠",
        'wither_do_rj': "While you were thinking about a Pou that was one of the most beautiful in history, I was there on the podium. I'm from Brazil 🇧🇷 🇧🇷 🇧🇷",
        'debappp_nfa': "Hi all Pous, I want you to have fun and play with me when you can, hugs ❤️ ❤️ ❤️",
        'santababy01': "Thank you Oesky for the opportunity to promote my fabulous Pou, she is part of my life and I really wanted her to represent me",
        'lizzypeep': "Sorry, I don't have a phrase, but I would like to be promoted to get more interesting likes 🌙",
        'h401217': "I like to play Food Swap, you can request me a Tic Tac Pou match. My other pou is H40dev 🇵🇪",
        'toolboxlikes': "I'm small in Pou and would like to grow, give a like to my Pou ^_^",
        'pou_9veif0': "Hello everyone! Well, I want to say that everyone who likes my Pou is my friend and everyone is welcome. I'm from Lithuania 🇱🇹🇱🇹 and I have more than 90 thousand likes on Pou! ^_^",
        'chaeyeot': "Hello, how are you all?",
        'rafaellll': "I'm noted in Pou and would like to have new friends 😆😆😆😆😆😆😆",
        'dahzz': "Like my cute Pou, my name is dahzz with two z's",
        'fachipou2013': "I'm a Pou YouTuber. For now, I have 19 likes. One day I would like to translate Pou",
        'letmebanyou': "I'm from Brazil and I would like, hope you like my Pou",
        'trendy_winter': "Feel at home when visiting me! I'm from Poland 🇵🇱🇵🇱🇵🇱",
        'olapaa': "Help my dalmatian grow in the game, but I wish the game were more updated",
        'like_x11': "I'm a big fan of your second Pou, Oesky",
        'nachito_2019': "Follow me on Pou",
        'tempestes': "From Peru to everyone, welcome=",
        'aqua_nando': "I enjoy playing Jump to the Sky and falling in Pou",

    };

    const fraseAssociada = frasesAssociadas[campoTextoEDIT.toLowerCase()];

    if (fraseAssociada && meuTextarea.value.trim().toLowerCase() === fraseAssociada.toLowerCase()) {
    divErroEDIT.textContent = `The inserted phrase is the same as Pou ${campoTextoEDIT} uses!`;
    return false;
    }

    const formasAceitas = ['NocTaFly', 'Pou2tiktok', 'qLw', 'Coki_818', 'cocoadolli', 'guaio_21', 'Cyberattack', 'Wither_DO_RJ', 'debappp_nfa', 'SantaBaby01', 'LizzyPeep', 'pou_IRKM9J', 'H401217', 'PouIceCreamRose'];

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
