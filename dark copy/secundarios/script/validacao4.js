document.getElementById("meuFormularioe").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmaile").value.trim().toLowerCase();
    const divErro = document.getElementById("divErroe");

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