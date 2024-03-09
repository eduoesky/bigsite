document.getElementById("formularioDeslike").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio automático do formulário
  
    var campoEmaild = document.getElementById("campoEmaild");
    var campoPalavrasd = document.getElementById("campoPalavrasd");
    var divErrod = document.getElementById("divErrod");
  
    // Verificar se o email tem pelo menos 15 caracteres
    if (campoEmaild.value.length < 15) {
      divErrod.textContent = "O email precisa ter +15 caracteres";
      return;
    }
  
    if (/^[0-9.]/.test(campoEmaild.value)) {
      divErrod.textContent = "Não pode começar emails com números ou pontos *_*";
      return;
    }
  
    var emailsProibidos = ["oeskky@gmail.com", "oesamaeduardakynlia@gmail.com"];
    if (emailsProibidos.includes(campoEmaild.value)) {
      divErrod.textContent = "Esse email é meu *_*";
      return;
    }

    if (!campoEmaild.value.endsWith("@gmail.com")) {
      divErrod.textContent = "São permitidos apenas gmails *_*";
      e.preventDefault();
  }    

    var nomesProibidos = ["oesky", "like_x1"];
    var palavraProibida = campoPalavrasd.value.toLowerCase();
    
    if (nomesProibidos.includes(palavraProibida)) {
      divErrod.textContent = "Acho que você digitou o meu próprio nome 😐";
      return;
    }

    var noc = ["noctafly"];
    var nocp = campoPalavrasd.value.toLowerCase();
    
    if (noc.includes(nocp)) {
      divErrod.textContent = "NocTaFly não terá deslike.";
      return;
    }

    
    var pou2 = ["pou2tiktok"];
    var pou2p = campoPalavrasd.value.toLowerCase();
    
    if (pou2.includes(pou2p)) {
      divErrod.textContent = "Pou2tiktok não terá deslike.";
      return;
    }
    
    var cyb = ["cyberattack"];
    var cybp = campoPalavrasd.value.toLowerCase();
    
    if (cyb.includes(cybp)) {
      divErrod.textContent = "Cyberattack não terá deslike.";
      return;
    }
  
    this.submit();
  });
  