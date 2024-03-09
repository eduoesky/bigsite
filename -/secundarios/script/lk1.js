document.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  function fecharAba(abaId) {
    document.getElementById(abaId).style.width = '0';
  }

  document.querySelector('.estrela').addEventListener('click', function() {
    document.getElementById('abaEsquerda').style.width = '250px';
  });

  document.querySelector('.castelo').addEventListener('click', function() {
    document.getElementById('abaDireita').style.width = '250px';
  });

  function abrirAba(abaId) {
    if (abaId === 'abaEsquerda') {
      document.getElementById('abaEsquerda').style.width = '250px';
      document.getElementById('abaDireita').style.width = '0';
    } else if (abaId === 'abaDireita') {
      document.getElementById('abaDireita').style.width = '250px';
      document.getElementById('abaEsquerda').style.width = '0';
    }
  }

  document.querySelector('.estrela').addEventListener('click', function() {
    abrirAba('abaEsquerda');
  });

  document.querySelector('.castelo').addEventListener('click', function() {
    abrirAba('abaDireita');
  });
