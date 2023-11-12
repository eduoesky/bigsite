function atualizarDivs(changedCheckbox) {
    const senhaCheckbox = document.getElementById('senha');
    const codigoCheckbox = document.getElementById('codigo');
    const passwordDiv = document.getElementById('password');
    const codegoDiv = document.getElementById('codego');

    if (changedCheckbox === 'senha' && senhaCheckbox.checked) {
        codigoCheckbox.checked = false;
    } else if (changedCheckbox === 'codigo' && codigoCheckbox.checked) {
        senhaCheckbox.checked = false;
    }

    passwordDiv.style.display = senhaCheckbox.checked ? 'block' : 'none';
    codegoDiv.style.display = codigoCheckbox.checked ? 'block' : 'none';

}
