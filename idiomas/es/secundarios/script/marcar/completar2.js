const campoTexto = document.getElementById('campoTextoEDIT');
const nomeUsuarioSpan = document.getElementById('nomeUsuario');

campoTexto.addEventListener('input', function() {
    nomeUsuarioSpan.textContent = campoTexto.value;
});