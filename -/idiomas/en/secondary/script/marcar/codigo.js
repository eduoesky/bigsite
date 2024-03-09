function gerarCodigo() {
    const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!_';
    let codigo = '';

    while (codigo.length < 8) {
        const caractere = caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)];

        if (codigo.length === 0 && caractere === '_') {
            continue;
        }

        if (codigo.length > 0 && caractere === '!') {
            continue;
        }

        codigo += caractere;
    }

    if (codigo[codigo.length - 1] === '!') {
        codigo = codigo.slice(0, -1) + caracteresPermitidos[Math.floor(Math.random() * (caracteresPermitidos.length - 1))];
    }

    document.getElementById('codigoaparece').value = codigo;
}