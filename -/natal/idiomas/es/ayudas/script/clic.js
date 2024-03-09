document.addEventListener("DOMContentLoaded", function() {
    var linkElement = document.getElementById("linkManual");
    var tooltipElement = document.getElementById("tooltip");
    var cliqueCount = 0;
  
    linkElement.addEventListener("click", function(event) {
      cliqueCount++;
  
      if (cliqueCount === 1) {
        tooltipElement.style.display = "block";
          setTimeout(function() {
          tooltipElement.style.display = "none"; 
          cliqueCount = 0; 
        }, 3000);
      } else if (cliqueCount === 2) {
        return true;
      }
  
      event.preventDefault(); 
    });
  });