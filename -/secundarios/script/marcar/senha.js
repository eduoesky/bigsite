function contarCaracteress() {
    const textarea = document.getElementById('Senha');
    const contador = document.getElementById('contadorCaracteress');

    const quantidadeAtual = textarea.value.length;
    const limiteMinimo = parseInt(textarea.getAttribute('minlength'));
    const limiteMaximo = parseInt(textarea.getAttribute('maxlength'));

    contador.textContent = `${quantidadeAtual}/${limiteMaximo}`;

    if (quantidadeAtual < limiteMinimo) {
        contador.style.color = 'red';
    } else {
        contador.style.color = 'black';
    }

    if (quantidadeAtual > limiteMaximo) {
        textarea.value = textarea.value.slice(0, limiteMaximo);
    }
}
