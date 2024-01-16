function validarCampoTexto(event) {
    const campoTexto = document.getElementById('campoTexto');
    const divErroTexto = document.getElementById('divErroTexto');
    const nomePou = campoTexto.value;
    event.prefault

    if (nomePou.length < 3) {
        divErroTexto.textContent = 'Nombre del Pou es inválido';
        event.preventDefault();
        return;
    }

    if (nomePou.length > 15) {
        divErroTexto.textContent = 'Nombre del Pou es inválido';
        event.preventDefault();
        return;
    }

    if (/[^a-zA-Z0-9_]/.test(nomePou)) {
        divErroTexto.textContent = 'Nombres de Pou no contienen símbolos!';
        event.preventDefault();
        return;
    }

    if (/^[^a-zA-Z]/.test(nomePou)) {
        divErroTexto.textContent = 'Nombre del Pou es inválido';
        event.preventDefault();
        return;
    }

    if (/^[0-9_]/.test(nomePou)) {
        divErroTexto.textContent = 'Escribe el nombre del Pou correctamente';
        event.preventDefault();
        return;
    }

    const pousProibidos = ['oesky', 'like_x1'];
    if (pousProibidos.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = 'Esos Pous son mios *_*';
        event.preventDefault();
        return;
    }

    const pousMarcados = ['noctafly', 'qlw', 'pou2tiktok'];
    if (pousMarcados.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = 'Pou ya marcado en el mural.';
        event.preventDefault();
        return;
    }

    divErroTexto.textContent = '';

    this.submit();
}