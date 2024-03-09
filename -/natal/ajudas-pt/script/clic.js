document.addEventListener("DOMContentLoaded", function() {
    var linkElement = document.getElementById("linkManual");
    var tooltipElement = document.getElementById("tooltip");
    var cliqueCount = 0;
  
    linkElement.addEventListener("click", function(event) {
      cliqueCount++;
  
      if (cliqueCount === 1) {
        // Primeiro clique, mostre o tooltip
        tooltipElement.style.display = "block";
  
        // Aguarde o segundo clique em 3 segundos
        setTimeout(function() {
          tooltipElement.style.display = "none"; // Oculte o tooltip se o segundo clique não ocorrer em tempo
          cliqueCount = 0; // Redefina o contador
        }, 3000);
      } else if (cliqueCount === 2) {
        // Segundo clique, o comportamento padrão do link será acionado (abrirá em uma nova aba)
        return true;
      }
  
      event.preventDefault(); // Impede o comportamento padrão do link (não segue o link no primeiro clique)
    });
  });