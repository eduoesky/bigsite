function validarFormulario3() {
    var campoEmail = document.getElementById("campoEmail").value.trim();
    var campoPalavras = document.getElementById("campoPalavras").value.trim();
    var campoPalavras2 = document.getElementById("campoPalavras2").value.trim();
    var divErro = document.getElementById("divErro");
    divErro.innerHTML = "";

    var palavrasProibidas = {
        "oesky": "Não é possível visitar a mim mesmo *_*"
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

// desmarcar tudo
function limparSelecao() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="opcao[]"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
}