const campoTexto = document.getElementById('campoTexto');
const nomeUsuarioSpan = document.getElementById('nomeUsuario');

campoTexto.addEventListener('input', function() {
    nomeUsuarioSpan.textContent = campoTexto.value;
});