document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmail").value.trim().toLowerCase();
    const divErro = document.getElementById("divErro");

    const emailsBloqueados = ['oeskky@gmail.com', 'oeskyoesky@gmail.com'];

    divErro.textContent = "";

    if (email.length < 15 || !email.endsWith("@gmail.com")) {
        divErro.textContent = "Email inválido, tente novamente";
        e.preventDefault();
    } else if (emailsBloqueados.includes(email)) {
        divErro.textContent = "Este email é meu *_*";
        e.preventDefault();
    }
});

        const botao = document.getElementById("botao");
const checkbox = document.getElementById("conf");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
});
