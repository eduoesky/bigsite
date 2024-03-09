const button = document.getElementById('generate');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(result)) {
        result = '??';
    }

    document.querySelector('#result > span').textContent = result;
});

var paises = [
    "África do Sul",
    "Albânia",
    "Alemanha",
    "Arábia Saudita",
    "Argélia",
    "Andorra",
    "Argentina",
    "Austrália",
    "Áustria",
    "Bahamas",
    "Bielorrússia",
    "Bélgica",
    "Belize",
    "Benim",
    "Bolívia",
    "Bósnia e Herzegovina",
    "Brasil",
    "Bulgária",
    "Camarões",
    "Canadá",
    "Chile",
    "China",
    "Colômbia",
    "Coreia do Sul",
    "Costa Rica",
    "Costa do Marfim",
    "Croácia",
    "Cuba",
    "Tchéquia",
    "Dinamarca",
    "Eslováquia",
    "Espanha",
    "Estados Unidos",
    "Equador",
    "Egito",
    "El Salvador",
    "Filipinas",
    "Finlândia",
    "França",
    "Gales",
    "Gana",
    "Grécia",
    "Guatemala",
    "Guiana",
    "Haiti",
    "Holanda",
    "Honduras",
    "Hungria",
    "Indonésia",
    "Inglaterra",
    "Irã",
    "Israel",
    "Itália",
    "Jamaica",
    "Japão",
    "Líbano",
    "Libéria",
    "Madagascar",
    "Malásia",
    "México",
    "Marrocos",
    "Nova Zelândia",
    "Nicarágua",
    "Nigéria",
    "Noruega",
    "Paquistão",
    "Panamá",
    "Papua Nova-Guiné",
    "Paraguai",
    "Peru",
    "Polônia",
    "Portugal",
    "Romênia",
    "Rússia",
    "Senegal",
    "Sérvia",
    "Suriname",
    "Suécia",
    "Suíça",
    "Tunísia",
    "Turquia",
    "Uruguai"
];

function sortearPais() {
    var indicesorteado = Math.floor(Math.random() * paises.length);

    var palavrasorteada = paises[indicesorteado];

    var resultado = document.getElementById('palavrasorteada');
    resultado.textContent = palavrasorteada;
};

var grupo = [
    "Grupo - A",
    "Grupo - B",
    "Grupo - C",
    "Grupo - D",
    "Grupo - E",
    "Grupo - F",
    "Grupo - G",
    "Grupo - H"
]

function sortearGrupo() {
    var indicesorte = Math.floor(Math.random() * grupo.length);

    var grupo32sorteado = grupo[indicesorte];

    var resultado = document.getElementById('grupo32sorteado');
    resultado.textContent = grupo32sorteado;
};

var grupos = [
    "Grupo - A",
    "Grupo - B",
    "Grupo - C",
    "Grupo - D",
    "Grupo - E",
    "Grupo - F",
    "Grupo - G",
    "Grupo - H",
    "Grupo - I",
    "Grupo - J",
    "Grupo - K",
    "Grupo - L",
    "Grupo - M",
    "Grupo - N",
    "Grupo - O",
    "Grupo - P"
]

function sortearGrupos() {
    var indicesortea = Math.floor(Math.random() * grupos.length);

    var grupo64sorteado = grupos[indicesortea];

    var resultado = document.getElementById('grupo64sorteado');
    resultado.textContent = grupo64sorteado;
};

var placares = [
    "0 x 0",
    "0 x 1",
    "1 x 0",
    "1 x 1",
    "0 x 2",
    "2 x 0",
    "1 x 2",
    "2 x 1",
    "2 x 2",
    "3 x 0",
    "0 x 3",
    "1 x 3",
    "3 x 1",
    "2 x 3",
    "3 x 2",
    "3 x 3",
    "4 x 0",
    "0 x 4",
    "4 x 1",
    "1 x 4",
    "4 x 2",
    "2 x 4",
    "3 x 4",
    "4 x 3",
    "4 x 4",
    "5 x 0",
    "0 x 5",
    "5 x 1",
    "1 x 5",
    "5 x 2",
    "2 x 5",
    "5 x 3",
    "3 x 5",
    "4 x 5",
    "5 x 4",
    "5 x 5",
    "6 x 0",
    "6 x 1",
    "0 x 6",
    "1 x 6",
    "6 x 2",
    "2 x 6",
    "3 x 6",
    "6 x 3",
    "6 x 4",
    "4 x 6",
    "6 x 5",
    "5 x 6",
    "6 x 6",
    "1 x 7",
    "7 x 1",
    "7 x 0",
    "0 x 7",
    "2 x 7",
    "7 x 2",
    "3 x 7",
    "7 x 3",
    "4 x 7",
    "7 x 4",
    "0 x 8",
    "8 x 0",
    "1 x 8",
    "8 x 1",
    "8 x 2",
    "2 x 8",
    "3 x 8",
    "8 x 3"
]

function sortearPlacar() {
    var indicesortead = Math.floor(Math.random() * placares.length);

    var placarsorteado = placares[indicesortead];

    var resultado = document.getElementById('placarsorteado');
    resultado.textContent = placarsorteado;
};