function validarCampoTexto(event) {
    const campoTexto = document.getElementById('campoTexto');
    const divErroTexto = document.getElementById('divErroTexto');
    const nomePou = campoTexto.value;
    event.prefault

    // Restrição 1
    if (nomePou.length < 3) {
        divErroTexto.textContent = 'Invalid Pou nick';
        event.preventDefault();
        return;
    }

    // Restrição 2
    if (nomePou.length > 15) {
        divErroTexto.textContent = 'Invalid Pou nick';
        event.preventDefault();
        return;
    }

    // Restrição 3
    if (/[^a-zA-Z0-9_]/.test(nomePou)) {
        divErroTexto.textContent = 'Pou nicks no contain symbols!';
        event.preventDefault();
        return;
    }

    // Restrição 4
    if (/^[^a-zA-Z]/.test(nomePou)) {
        divErroTexto.textContent = 'Invalid Pou nick';
        event.preventDefault();
        return;
    }

    // Restrição 5
    if (/^[0-9_]/.test(nomePou)) {
        divErroTexto.textContent = 'Type your Pou nick correctly';
        event.preventDefault();
        return;
    }

    // Restrição 6
    const pousProibidos = ['oesky', 'like_x1'];
    if (pousProibidos.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = 'This is my Pou *_*';
        event.preventDefault();
        return;
    }

    // Restrição 7
    const pousMarcados = ['noctafly', 'qlw', 'pou2tiktok'];
    if (pousMarcados.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = 'Pou already is in the panel.';
        event.preventDefault();
        return;
    }

    divErroTexto.textContent = '';

    this.submit();
}