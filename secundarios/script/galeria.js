const images = [
    { src: "../images/galeria/oeskynapraia.png", caption: "OesKy na praia" },
    { src: "../images/galeria/oeskychoque.png", caption: "OesKy tomando choque" },
    { src: "../images/galeria/oeskybaldeagua.png", caption: "OesKy levando água" },
    { src: "../images/galeria/oeskygelo.png", caption: "OesKy congelada" },
    { src: "../images/galeria/oeskysurfando.png", caption: "OesKy surfando" },
    { src: "../images/galeria/oeskynochapeu.png", caption: "OesKy no próprio chapéu" },
    { src: "../images/galeria/oeskynocometa.png", caption: "OesKy num meteoro" },
    { src: "../images/galeria/oeskynoaviao.png", caption: "OesKy pilotando um avião" },
    { src: "../images/galeria/oeskypintando.png", caption: "OesKy pintando" },
    { src: "../images/galeria/oeskycompocao.png", caption: "OesKy fazendo testes químicos" },
    { src: "../images/galeria/oeskynasnuvens.png", caption: "OesKy nas nuvens" },
    { src: "../images/galeria/oeskylua.png", caption: "OesKy na lua" },
    { src: "../images/galeria/oeskytomandobanho.png", caption: "OesKy tomando banho" },
    { src: "../images/galeria/oeskynumincendio.png", caption: "OesKy em um incêndio" },
    { src: "../images/galeria/oeskyapaixonada.png", caption: "OesKy apaixonada" },
    { src: "../images/galeria/oeskynanave.png", caption: "OesKy em uma nave alienígena" },
    { src: "../images/galeria/oeskyespaçosideral.png", caption: "OesKy no espaço sideral" },
    { src: "../images/galeria/oeskyefantasmas.png", caption: "OesKy junto a fantasmas" },
    { src: "../images/galeria/oeskyseacidenta.png", caption: "OesKy colide o avião numa parede" },
    { src: "../images/galeria/aniversariodaoesky.png", caption: "OesKy completa 1 ano" },
    { src: "../images/galeria/oeskyecyberpraia.png", caption: "OesKy e Cyberattack na gangorra" },
    { src: "../images/galeria/oeskydeusa.png", caption: "OesKy deusa" },
    { src: "../images/galeria/oeskyrainbow.png", caption: "OesKy e seus amigos caindo" },
    { src: "../images/galeria/oeskyaviaodepapel.png", caption: "OesKy num avião de papel" },
    { src: "../images/galeria/oeskysemsinal.png", caption: "OesKy, mas sem sinal" },
    { src: "../images/galeria/oeskyescuro.png", caption: "OesKy no escuro" },
    { src: "../images/galeria/oeskybrasil.png", caption: "OesKy é do Brasil!" },
    { src: "../images/galeria/oeskyanonovo.png", caption: "OesKy num revéillon" },
    { src: "../images/galeria/oeskynobalao.png", caption: "OesKy e seus amigos em balões (ft. Pou2tiktok & Cyberattack)" },
    { src: "../images/galeria/oeskybaleia.png", caption: "OesKy sendo jogada por uma baleia" },
    { src: "../images/galeria/oeskycomlupa.png", caption: "OesKy com uma pequena formiga" },
    { src: "../images/galeria/oeskyestrelacadente.png", caption: "OesKy como uma estrela cadente" },
    { src: "../images/galeria/oeskyraio.png", caption: "OesKy levou um raio durante uma tempestade" },
    { src: "../images/galeria/oeskyeestátua.png", caption: "OesKy e seu próprio monumento" },
    { src: "../images/galeria/oeskycores.png", caption: "OesKy no Holi Festival!" },
    { src: "../images/galeria/oeskyderreteu.png", caption: "OesKy se derreteu" },
    { src: "../images/galeria/oeskynovulcao.png", caption: "OesKy passando perto de um vulcão" },
    { src: "../images/galeria/oeskynaflecha.png", caption: "Uma flecha atingiu a maçã em cima da OesKy" },
    { src: "../images/galeria/oeskyflores.png", caption: "OesKy em seu jardim cheio de flores" },
    { src: "../images/galeria/oeskynotrampolim.png", caption: "OesKy pulando no trampolim" },
    { src: "../images/galeria/oeskynagelatina.png", caption: "OesKy atingiu uma gelatina" },
    { src: "../images/galeria/oeskypipa.png", caption: "OesKy empinando pipa" },
    { src: "../images/galeria/oeskychuva.png", caption: "OesKy na chuva, mas com o guarda-chuva quebrado" },
    { src: "../images/galeria/oeskycaixa.png", caption: "OesKy numa caixa de encomenda" },
    { src: "../images/galeria/oeskychiclete.png", caption: "OesKy mascando um chiclete" },
    { src: "../images/galeria/oeskyeharam.png", caption: "HaramHamster retirando OesKy de um morro" },
    { src: "../images/galeria/oeskyinvertida.png", caption: "OesKy, mas com a cor invertida" },
    { src: "../images/galeria/oeskyecristais.png", caption: "OesKy no mundo dos cristais" },
    { src: "../images/galeria/oeskyboladecristal.png", caption: "OesKy numa bola de cristal" },
    { src: "../images/galeria/oeskymaint.png", caption: "OesKy em um serviço" },
    { src: "../images/galeria/oeskydormindo.png", caption: "OesKy tirando uma soneca" },
    { src: "../images/galeria/oeskyabduzida.png", caption: "OesKy sendo abduzida por Cyberattack" },
    { src: "../images/galeria/oeskyseria.png", caption: "OesKy séria" },
    { src: "../images/galeria/oeskynatal.png", caption: "OesKy no clima de natal!" },
    { src: "../images/galeria/oeskymagica.png", caption: "OesKy tirando Like_x1 de uma cartola mágica" },
    { src: "../images/galeria/oeskyburaconegro.png", caption: "OesKy e seus amigos sendo sugados por um buraco negro (ft. qlw, Cyberattack & Pou2tiktok" },
    { src: "../images/galeria/oeskymagia.png", caption: "OesKy soltando toda a sua magia congelada" },
    { src: "../images/galeria/oeskybalança.png", caption: "OesKy & NocTaFly numa balança, mas OesKy perdeu" },
    { src: "../images/galeria/oeskyteatro.png", caption: "OesKy apresentando o seu novo site" },
    { src: "../images/galeria/oeskyserra.png", caption: "OesKy tonta enquanto está dentro de uma serra" },
  ];
  let currentIndex = 0;
  
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const imageContainer = document.querySelector(".image-container");
  const captionElement = document.createElement("p");
  captionElement.className = "image-caption";
  
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    fadeOut(() => {
      updateImage();
      fadeIn();
    });
  });
  
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    fadeOut(() => {
      updateImage();
      fadeIn();
    });
  });
  
  function updateImage() {
    const currentImage = images[currentIndex];
    const imageUrl = currentImage.src;
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Imagem ${currentIndex + 1}">`;
    captionElement.textContent = currentImage.caption;
    imageContainer.appendChild(captionElement);
  }
  
  function fadeIn() {
    imageContainer.style.opacity = 0;
    imageContainer.style.transition = "opacity 0.5s";
    setTimeout(() => {
      imageContainer.style.opacity = 1;
    }, 10);
  }
  
  function fadeOut(callback) {
    imageContainer.style.opacity = 0;
    imageContainer.style.transition = "opacity 0.5s";
    setTimeout(() => {
      callback();
    }, 500);
  }
  

  updateImage();
    setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    fadeOut(() => {
      updateImage();
      fadeIn();
    });
  }, 3000); //3s
  