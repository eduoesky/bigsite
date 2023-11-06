function toggleDiv(numero) {
    const div = document.getElementById(`div${numero}`);
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

function togleDiv(numero) {
    const divv = document.getElementById(`divv${numero}`);
    if (divv.style.display === 'none' || divv.style.display === '') {
        divv.style.display = 'block';
    } else {
        divv.style.display = 'none';
    }
}

// lembre-se de que são duas: 2g e 1g, 2v e 1v (ambas para a mesma página) **