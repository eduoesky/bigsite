document.getElementById("FormularioErro").addEventListener("submit", function (event) {
    const campoEmail = document.getElementById("campoEmail").value.trim().toLowerCase();
    const campoTexto = document.getElementById("campoTexto").value.trim().toLowerCase();
    const divErro = document.getElementById("divErro");
    divErro.innerHTML = "";
    let hasErrors = false;

    const emailRe = /^[A-Za-z0-9._%+-]+@gmail\.com$/i;
    const emojiRe = /[\uD83C-\uDBFF\uDC00-\uDFFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF\uD800-\uDBFF]/;
    const simbolosRe = /[!#$%^&*(),?":{}|<>]/;
    const palavroesProibidos = ["puta", "porra", "caralho", "buceta", "desgraça", "pariu", "pqp", "krl", "k7", "kct", "bct", "boba", "rato", "poorra", "poha", "karalho", "vadia", "vadio", "nojenta", "arrombada", "arrombado", "porco", "gay", "lesada", "bruxa", "vagabundo", "vagabunda", "merda", "abutre", "infeliz", "vagina", "penis", "pau", "tomarnocu", "tnc", "fuder", "foda", "fds", "fodase", "foda-se", "paunocu", "pnc", "nocu", "no cu", "cu", "pau no cu", "puta que pariu", "pqp", "puta q pariu", "inferno", "viado", "plmdds", "mds", "puta merda", "merda", "aborto", "semen", "esperma", "merdinha", "lixa", "lixo", "zé", "merdica", "bosta", "desgraçada", "odeio", "vsf", "pelotudo", "pelotuda", "pelotud", "boludo", "boluda", "pingo", "mierda", "fdp", "fdpt", "vacilão", "castigada", "castigado", "infierno", "horrible", "horroroso", "mala", "malo", "fuck", "shit", "hell", "asshole", "egg", "huevo", "ovo", "chupa", "puta madre", "holy shit", "wtf", "stick", "poo", "poop", "vierme", "verme", "ass", "hole", "anus", "pica", "pika", "filha da", "filho da", "hijo de la", "hijo de", "hija de la", "hija de", "puto", "estrumo", "cocô", "maldito", "maldita", "fuck you", "fk u", "fuck u", "carajo", "krj", "crj", "marijuana", "maconha", "gozar", "gzr", "gostosa", "gostoso", "porn", "pornô", "porno", "pedo", "pedofilia", "vtnc"];

    if (campoEmail.length < 15) {
        hasErrors = true;
        divErro.innerHTML = "El email no puede tener menos que 15 caracteres *_*";
    } else if (!emailRe.test(campoEmail)) {
        hasErrors = true;
        divErro.innerHTML = "Son permitidos sólo gmails *_*";
    } else if (campoEmail[0] === "." || campoEmail[0] === "1" || campoEmail[0] === "2" || campoEmail[0] === "3" || campoEmail[0] === "4" || campoEmail[0] === "5" || campoEmail[0] === "6" || campoEmail[0] === "7" || campoEmail[0] === "8" || campoEmail[0] === "9") {
        hasErrors = true;
        divErro.innerHTML = "No empece el email con símbolos o números *_*";
    } else if (campoEmail === "oesamaeduardakynlia@gmail.com" || campoEmail === "oeskky@gmail.com") {
        hasErrors = true;
        divErro.innerHTML = "¡Email proibido! *_*";
    } else if (emojiRe.test(campoEmail)) {
        hasErrors = true;
        divErro.innerHTML = "No usas emojis en el email *_*";
    } else if (simbolosRe.test(campoEmail)) {
        hasErrors = true;
        divErro.innerHTML = "No usas símbolos especiales en el email *_*";
    }
    if (/(\w)\1{2,}/.test(campoTexto)) {
        hasErrors = true;
        divErro.innerHTML = "No ponga letras repetidas en secuencia *_*";
    }

    if (emojiRe.test(campoTexto)) {
        hasErrors = true;
        divErro.innerHTML = "Por favor, escribe sin usar emojis *_*";
    } else if (campoTexto.replace(/\s/g, '').length < 25) {
        hasErrors = true;
        divErro.innerHTML = "Dime el error con más palabras *_*";
    } else if (campoTexto.includes("@")) {
        hasErrors = true;
        divErro.innerHTML = "No son permitidos arrobas *_*";
    } else if (campoTexto.includes("*")) {
        hasErrors = true;
        divErro.innerHTML = "Asteriscos no son permitidos *_*";
    }
        for (const palavraProibida of palavroesProibidos) {
            const regexPalavraProibida = new RegExp(`\\b${palavraProibida}\\b`, "i");
            if (regexPalavraProibida.test(campoTexto)) {
                hasErrors = true;
                divErro.innerHTML = "No usas palabras malas *_*";
                break;
            }
        }

    if (hasErrors) {
        event.preventDefault();
        divErro.style.display = "block";
    } else {
        divErro.style.display = "none";
    }
});
