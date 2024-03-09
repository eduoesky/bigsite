document.getElementById("FormularioErro").addEventListener("submit", function (event) {
    const campoEmail = document.getElementById("campoEmail").value.trim().toLowerCase();
    const campoTexto = document.getElementById("campoTexto").value;
    const divErro = document.getElementById("divErro");
    divErro.innerHTML = "";
    let hasErrors = false;

    const emailRe = /^[A-Za-z0-9._%+-]+@gmail\.com$/i;
    const emojiRe = /[\uD83C-\uDBFF\uDC00-\uDFFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF]/;
    const simbolosRe = /[!#$%^&*(),?":{}|<>]/;
    const palavroesProibidos = ["puta", "porra", "caralho", "buceta", "desgraça", "pariu", "pqp", "krl", "k7", "kct", "bct", "boba", "rato", "poorra", "poha", "karalho", "vadia", "vadio", "nojenta", "arrombada", "arrombado", "porco", "gay", "lesada", "bruxa", "vagabundo", "vagabunda", "merda", "abutre", "infeliz", "vagina", "penis", "pau", "tomarnocu", "tnc", "fuder", "foda", "fds", "fodase", "foda-se", "paunocu", "pnc", "nocu", "no cu", "cu", "pau no cu", "puta que pariu", "pqp", "puta q pariu", "inferno", "viado", "plmdds", "mds", "puta merda", "merda", "aborto", "semen", "esperma", "merdinha", "lixa", "lixo", "zé", "merdica", "bosta", "desgraçada", "odeio", "vsf", "pelotudo", "pelotuda", "pelotud", "boludo", "boluda", "pingo", "mierda", "fdp", "fdpt", "vacilão", "castigada", "castigado", "infierno", "horrible", "horroroso", "mala", "malo", "fuck", "shit", "hell", "asshole", "egg", "huevo", "ovo", "chupa", "puta madre", "holy shit", "wtf", "stick", "poo", "poop", "vierme", "verme", "ass", "hole", "anus", "pica", "pika", "filha da", "filho da", "hijo de la", "hijo de", "hija de la", "hija de", "puto", "estrumo", "cocô", "maldito", "maldita", "fuck you", "fk u", "fuck u", "carajo", "krj", "crj", "marijuana", "maconha", "gozar", "gzr", "gostosa", "gostoso", "porn", "pornô", "porno", "pedo", "pedofilia", "vtnc"];

    if (campoEmail.length < 15) {
        hasErrors = true;
        divErro.innerHTML = "The email must have 15 characters *_*";
    } else if (!emailRe.test(campoEmail)) {
        hasErrors = true;
        divErro.innerHTML = "Are allowed only gmails *_*";
    } else if (campoEmail[0] === "." || campoEmail[0] === "1" || campoEmail[0] === "2" || campoEmail[0] === "3" || campoEmail[0] === "4" || campoEmail[0] === "5" || campoEmail[0] === "6" || campoEmail[0] === "7" || campoEmail[0] === "8" || campoEmail[0] === "9") {
        hasErrors = true;
        divErro.innerHTML = "Don't start the email with symbols or numbers *_*";
    } else if (campoEmail === "oesamaeduardakynlia@gmail.com" || campoEmail === "oeskky@gmail.com") {
        hasErrors = true;
        divErro.innerHTML = "Email denied! *_*";
    } else if (emojiRe.test(campoEmail)) {
        hasErrors = true;
        divErro.innerHTML = "Don't use emojis in the email *_*";
    } else if (simbolosRe.test(campoEmail)) {
        hasErrors = true;
        divErro.innerHTML = "Don't use especial symbols in the email *_*";
    }
    if (/(\w)\1{2,}/.test(campoTexto)) {
        hasErrors = true;
        divErro.innerHTML = "No enter repeated letters in sequence *_*";
    }


    // Validação do campoTexto
    if (emojiRe.test(campoTexto)) {
        hasErrors = true;
        divErro.innerHTML = "Please, type without emojis *_*";
    } else if (campoTexto.replace(/\s/g, '').length < 25) {
        hasErrors = true;
        divErro.innerHTML = "Type the error with more words *_*";
    } else if (campoTexto.includes("@")) {
        hasErrors = true;
        divErro.innerHTML = "At signs are not allowed *_*";
    } else if (campoTexto.includes("*")) {
        hasErrors = true;
        divErro.innerHTML = "Asterisks are not allowed *_*";
    }
        for (const palavraProibida of palavroesProibidos) {
            const regexPalavraProibida = new RegExp(`\\b${palavraProibida}\\b`, "i");
            if (regexPalavraProibida.test(campoTexto)) {
                hasErrors = true;
                divErro.innerHTML = "Don't use swear words *_*";
                break;
            }
        }

    if (hasErrors) {
        event.preventDefault(); // Impede o envio do formulário se houver erros
        divErro.style.display = "block";
    } else {
        divErro.style.display = "none";
    }
});
