document.getElementById("formularioDeslike").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var campoEmaild = document.getElementById("campoEmaild");
    var campoPalavrasd = document.getElementById("campoPalavrasd");
    var divErrod = document.getElementById("divErrod");
  
    if (campoEmaild.value.length < 15) {
      divErrod.textContent = "El email necesita tener +15 caracteres";
      return;
    }

    if (/^[0-9.]/.test(campoEmaild.value)) {
      divErrod.textContent = "No se puede comenzar emails con números o puntos *_*";
      return;
    }
  
    var emailsProibidos = ["oeskky@gmail.com", "oesamaeduardakynlia@gmail.com"];
    if (emailsProibidos.includes(campoEmaild.value)) {
      divErrod.textContent = "Ese email es mio *_*";
      return;
    }

    if (!campoEmaild.value.endsWith("@gmail.com")) {
      divErrod.textContent = "Son permitidos sólo gmails *_*";
      e.preventDefault();
  }    
  
    var nomesProibidos = ["oesky", "like_x1"];
    var palavraProibida = campoPalavrasd.value.toLowerCase();
    
    if (nomesProibidos.includes(palavraProibida)) {
      divErrod.textContent = "Creo que escribiste mi proprio nombre 😐";
      return;
    }

    var noc = ["noctafly"];
    var nocp = campoPalavrasd.value.toLowerCase();
    
    if (noc.includes(nocp)) {
      divErrod.textContent = "NocTaFly no tendrá dislike.";
      return;
    }

    
    var pou2 = ["pou2tiktok"];
    var pou2p = campoPalavrasd.value.toLowerCase();
    
    if (pou2.includes(pou2p)) {
      divErrod.textContent = "Pou2tiktok no tendrá dislike.";
      return;
    }
    
    var cyb = ["cyberattack"];
    var cybp = campoPalavrasd.value.toLowerCase();
    
    if (cyb.includes(cybp)) {
      divErrod.textContent = "Cyberattack no tendrá dislike.";
      return;
    }
  
    this.submit();
  });
  