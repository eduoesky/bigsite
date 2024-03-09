// as 3 primeiras estão relacionadas às checkboxs de marcação 
function selecionarTodasoesky() {
    var checkboxPrincipal = document.getElementById('selecadotodTotal');
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name]');
    
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = checkboxPrincipal.checked;
    }
}

function limparSelecau() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}

var botaoUnselect = document.getElementById('botaounselect');
    if (botaoUnselect) {
    botaoUnselect.addEventListener('click', limparSelecao);
}

//sobre as checkboxs dos 'visitar toplikes'...

//paul

function selecionarTodas() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-paul"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaoTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//pitufina

function selecionarTodaspit() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-pitufa"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaooTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//paolo

function selecionarTodaspao() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-paolo"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaopTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//vera

function selecionarTodasvera() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-vera"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaoqTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//eltitochor

function selecionarTodaselt() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-eltito"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecauTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//miras

function selecionarTodasmir() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-mirek"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaoiTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//martin

function selecionarTodasnomorewar() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-martin"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaoyTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//manoj

function selecionarTodasmanoj() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-manoj"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaoaTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//awja

function selecionarTodasawja() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-awja"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaoQpTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

// brasiill

function selecionarTodasbrasil() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-brasil"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaopw2Total').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

// zovik

function selecionarTodaszovik() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-zovik"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaop3Total').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//sexypou

function selecionarTodassex() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-sexy"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecao33pTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//cuxita

function selecionarTodascuxita() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-cuxita"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaoepTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//winter

function selecionarTodasnuclear() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-winter"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaopw2fTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//beautiful

function selecionarTodasbeautiful() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-beautiful"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecaop9gTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//therioon

function selecionarTodastherioon() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-therioon"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecadopTotal').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

// kitor

function selecionarTodaskitor() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-kitor"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecadop9Total').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//violetta

function selecionarTodasvioleta() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-violeta"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecadop49Total').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

//tanfall

function selecionarTodasadriel() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name$="-para-adriel"]');
    var apenasVisitarCheckbox = document.getElementById('apenasvisite');
    if (document.getElementById('selecadop39Total').checked) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}