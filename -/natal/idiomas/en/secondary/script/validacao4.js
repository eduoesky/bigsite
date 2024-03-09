document.getElementById("meuFormularioe").addEventListener("submit", function (e) {
    const email = document.getElementById("campoEmaile").value.trim().toLowerCase();
    const divErro = document.getElementById("divErroe");

    const emailsBloqueados = ['oeskky@gmail.com', 'oeskyoesky@gmail.com'];

    divErro.textContent = "";

    if (email.length < 15 || !email.endsWith("@gmail.com")) {
        divErro.textContent = "Invalid gmail, try again";
        e.preventDefault();
    } else if (emailsBloqueados.includes(email)) {
        divErro.textContent = "It's my email *_*";
        e.preventDefault();
    }
});