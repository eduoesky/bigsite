function atualizarDivss(changedCheckbox) {
    const delpouCheckbox = document.getElementById('delpou');
    const nmerradoCheckbox = document.getElementById('nmerrado');
    const altfraseCheckbox = document.getElementById('altfrase');
    const altemailCheckbox = document.getElementById('altemail');

    const deletarDiv = document.getElementById('deletar-div');
    const enviarDiv = document.getElementById('enviar-div');
    const erradoDiv = document.getElementById('errado-div');
    const emailDiv = document.getElementById('email-div');
    const fraseDiv = document.getElementById('frase-div');

    const divsToToggle = ['errado-div', 'frase-div', 'deletar-div', 'email-div'];

    if (changedCheckbox === 'delpou' && delpouCheckbox.checked) {
        [nmerradoCheckbox, altfraseCheckbox, altemailCheckbox].forEach(function (cb) {
            cb.checked = false;
        });

        deletarDiv.style.display = 'block';
        enviarDiv.style.display = 'none';
        emailDiv.style.display = 'none';
        erradoDiv.style.display = 'none';
        fraseDiv.style.display = 'none';
    } else {
        deletarDiv.style.display = 'none';
        enviarDiv.style.display = 'block';
    }

    divsToToggle.forEach(function (divId) {
        const div = document.getElementById(divId);
        const checkbox = document.getElementById(divId.replace('-div', ''));

        if (div && checkbox) {
            div.style.display = checkbox.checked ? 'block' : 'none';
        }
    });
}