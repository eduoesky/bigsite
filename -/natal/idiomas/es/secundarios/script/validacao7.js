document.getElementById("correcaoFormularioa").addEventListener("submit", function (event) {
    event.preventDefault();

    var campoPalavrass = document.getElementById("campoPalavrass");
    var campoPalavras22 = document.getElementById("campoPalavras22");
    var divErroq = document.getElementById("divErroq");
  
    if (campoPalavrass.value === campoPalavras22.value) {
        divErroq.textContent = "Los dos nombres son iguales";
        e.preventDefault();
      }

    var nomesProibidos = ["oesky", "like_x1"];
    if (nomesProibidos.includes(campoPalavrass.value) || nomesProibidos.includes(campoPalavras22.value)) {
      divErroq.textContent = "¡No puedo visitarme!";
      e.preventDefault();
    } 

    this.submit();
  });