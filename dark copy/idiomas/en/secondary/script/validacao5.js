document.getElementById("formularioDeslike").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio automático do formulário
  
    var campoEmaild = document.getElementById("campoEmaild");
    var campoPalavrasd = document.getElementById("campoPalavrasd");
    var divErrod = document.getElementById("divErrod");
  
    // Verificar se o email tem pelo menos 15 caracteres
    if (campoEmaild.value.length < 15) {
      divErrod.textContent = "The email needs have +15 characters";
      return;
    }
  
    // Verificar se o email começa com números ou pontos
    if (/^[0-9.]/.test(campoEmaild.value)) {
      divErrod.textContent = "Cannot to start emails with number or dots *_*";
      return;
    }
  
    // Proibir emails específicos
    var emailsProibidos = ["oeskky@gmail.com", "oesamaeduardakynlia@gmail.com"];
    if (emailsProibidos.includes(campoEmaild.value)) {
      divErrod.textContent = "It's my email *_*";
      return;
    }
  
    // Proibir nomes específicos
    var nomesProibidos = ["oesky", "like_x1"];
    var palavraProibida = campoPalavrasd.value.toLowerCase();
    
    if (nomesProibidos.includes(palavraProibida)) {
      divErrod.textContent = "I think you typed myself nickname 😐";
      return;
    }

    if (!campoEmaild.value.endsWith("@gmail.com")) {
      divErrod.textContent = "Are allowed only gmails *_*";
      e.preventDefault();
  }    

    var noc = ["noctafly"];
    var nocp = campoPalavrasd.value.toLowerCase();
    
    if (noc.includes(nocp)) {
      divErrod.textContent = "NocTaFly will no have dislike.";
      return;
    }

    
    var pou2 = ["pou2tiktok"];
    var pou2p = campoPalavrasd.value.toLowerCase();
    
    if (pou2.includes(pou2p)) {
      divErrod.textContent = "Pou2tiktok will no have dislike.";
      return;
    }
    
    var cyb = ["cyberattack"];
    var cybp = campoPalavrasd.value.toLowerCase();
    
    if (cyb.includes(cybp)) {
      divErrod.textContent = "Cyberattack will no have dislike.";
      return;
    }
  
    // Se todas as verificações passarem, você pode prosseguir com o envio do formulário
    this.submit();
  });
  