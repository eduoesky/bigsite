document.getElementById("meuFormulario").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmail").value.trim().toLowerCase();
    const divErro = document.getElementById("divErro");

    const emailsBloqueados = ['oeskky@gmail.com', 'oeskyoesky@gmail.com'];

    divErro.textContent = "";

    if (email.length < 15 || !email.endsWith("@gmail.com")) {
        divErro.textContent = "Invalid email, try again";
        e.preventDefault();
    } else if (emailsBloqueados.includes(email)) {
        divErro.textContent = "This is my email *_*";
        e.preventDefault();
    }
});

        const botao = document.getElementById("botao");
const checkbox = document.getElementById("conf");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        botao.disabled = false; // Ativa o botão
    } else {
        botao.disabled = true; // Desativa o botão
    }
});
