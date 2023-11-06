document.getElementById("meuFormularioA").addEventListener("submit", function (e) {
    e.preventDefault();

    const meus = ['oesky', 'like_x1'];
    const mensagem = document.getElementById("campoPalavras3").value.trim().toLowerCase();
    const divErro = document.getElementById("divErrof");
    
    divErro.textContent = "";

    if (!/^[a-zA-Z][a-zA-Z0-9_]{2,14}$/.test(mensagem)) {
        divErro.textContent = "Invalid Pou nickname";
    } else if (meus.includes(mensagem)) {
        divErro.textContent = "This is my nickname *_*";
    } else {

        this.submit();
    }
});
