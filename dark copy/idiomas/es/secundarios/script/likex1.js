function validarCampoTexto(input) {
    const valor = input.value.trim();
    
    if (valor.length < 3 || valor.length > 15) {
        return "¡3 a 15 caracteres!";
    }
    
    if (/^\d/.test(valor) || valor.includes('.')) {
        return "¡Sin comenzar con números ni ingresar puntos!";
    }

    const palavrasProibidas = ['oesky', 'like_x1'];
    for (const palavra of palavrasProibidas) {
        if (valor.toLowerCase().includes(palavra)) {
            return `Soy yo *_*`;
        }
    }

    return "";
}

function validarFormulario(formulario, mensagemErroId) {
    const input = formulario.querySelector('input[type="text"]');
    const mensagemErro = document.getElementById(mensagemErroId);
    
    mensagemErro.textContent = "";

    const erro = validarCampoTexto(input);

    if (erro) {
        mensagemErro.textContent = erro;
        return false;
    }

    return true;
}

document.getElementById("meuFormulare").addEventListener("submit", function (e) {
    if (!validarFormulario(this, "divErra")) {
        e.preventDefault();
    }
});

document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    if (!validarFormulario(this, "divErro")) {
        e.preventDefault();
    }
});