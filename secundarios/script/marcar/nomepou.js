function validarCampoTexto(event) {
    const campoTexto = document.getElementById('campoTexto');
    const divErroTexto = document.getElementById('divErroTexto');
    const nomePou = campoTexto.value;
    event.prefault

    // Restrição 1
    if (nomePou.length < 3) {
        divErroTexto.textContent = 'Nome do Pou é inválido';
        event.preventDefault();
        return;
    }

    // Restrição 2
    if (nomePou.length > 15) {
        divErroTexto.textContent = 'Nome do Pou é inválido';
        event.preventDefault();
        return;
    }

    // Restrição 3
    if (/[^a-zA-Z0-9_]/.test(nomePou)) {
        divErroTexto.textContent = 'Nomes de Pou não contêm símbolos!';
        event.preventDefault();
        return;
    }

    // Restrição 4
    if (/^[^a-zA-Z]/.test(nomePou)) {
        divErroTexto.textContent = 'Nome do Pou é inválido';
        event.preventDefault();
        return;
    }

    // Restrição 5
    if (/^[0-9_]/.test(nomePou)) {
        divErroTexto.textContent = 'Digite o nome do Pou corretamente';
        event.preventDefault();
        return;
    }

    // Restrição 6
    const pousProibidos = ['oesky', 'like_x1'];
    if (pousProibidos.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = 'Esses Pous são meus *_*';
        event.preventDefault();
        return;
    }

    // Restrição 7
    const pousMarcados = ['noctafly', 'qlw', 'pou2tiktok'];
    if (pousMarcados.includes(nomePou.toLowerCase())) {
        divErroTexto.textContent = 'Pou já marcado no mural.';
        event.preventDefault();
        return;
    }

    // Se todas as restrições passaram, não há erro
    divErroTexto.textContent = '';

    this.submit();
}