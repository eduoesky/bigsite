function validarFormulario() {
    var campoEmail = document.getElementById("campoEmail").value.trim();
    var campoPalavras = document.getElementById("campoPalavras").value.trim();
    var campoPalavras2 = document.getElementById("campoPalavras2").value.trim();
    var divErro = document.getElementById("divErro");
    divErro.innerHTML = "";

    if (!campoEmail.toLowerCase().endsWith("@gmail.com")) {
        divErro.innerHTML += "Por favor, insira apenas emails com o formato '@gmail.com'.<br>";
    }

    var palavrasProibidas = {
        "oesky": "Não é possível digitar o meu próprio nome *_*<br>",
        "noctafly": "O Pou 'NocTaFly' está indisponível para este serviço<br>"
    };

    for (var palavra in palavrasProibidas) {
        if (campoPalavras.toLowerCase().includes(palavra)) {
            divErro.innerHTML += palavrasProibidas[palavra];
        }
    }

    for (var palavra in palavrasProibidas) {
        if (campoPalavras2.toLowerCase().includes(palavra)) {
            divErro.innerHTML += palavrasProibidas[palavra];
        }
    }

    if (divErro.innerHTML !== "") {
        divErro.style.display = "block";
        return false;
    }
    
    return true;
}