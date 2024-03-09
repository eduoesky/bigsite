const images = [
    { src: "../../../images/galeria/oeskynapraia.png", caption: "OesKy en la playa" },
    { src: "../../../images/galeria/oeskychoque.png", caption: "OesKy chocó" },
    { src: "../../../images/galeria/oeskybaldeagua.png", caption: "Se le cayó un balde de agua en la cabeza a OesKy" },
    { src: "../../../images/galeria/oeskygelo.png", caption: "OesKy se congeló" },
    { src: "../../../images/galeria/oeskysurfando.png", caption: "OesKy surfeando" },
    { src: "../../../images/galeria/oeskynochapeu.png", caption: "OesKy en su proprio sombrero" },
    { src: "../../../images/galeria/oeskynocometa.png", caption: "OesKy en un meteoro" },
    { src: "../../../images/galeria/oeskynoaviao.png", caption: "OesKy pilotando un avión" },
    { src: "../../../images/galeria/oeskypintando.png", caption: "OesKy pintando" },
    { src: "../../../images/galeria/oeskycompocao.png", caption: "OesKy haciendo pruebas químicas" },
    { src: "../../../images/galeria/oeskynasnuvens.png", caption: "OesKy en las nubes" },
    { src: "../../../images/galeria/oeskylua.png", caption: "OesKy en la luna" },
    { src: "../../../images/galeria/oeskytomandobanho.png", caption: "OesKy se bañando" },
    { src: "../../../images/galeria/oeskynumincendio.png", caption: "OesKy en un incendio" },
    { src: "../../../images/galeria/oeskyapaixonada.png", caption: "OesKy enamorada" },
    { src: "../../../images/galeria/oeskynanave.png", caption: "OesKy em una nave alienígena" },
    { src: "../../../images/galeria/oeskyespaçosideral.png", caption: "OesKy en el espacio sideral" },
    { src: "../../../images/galeria/oeskyefantasmas.png", caption: "OesKy junto a fantasmas" },
    { src: "../../../images/galeria/oeskyseacidenta.png", caption: "OesKy choca el avión contra una pared" },
    { src: "../../../images/galeria/aniversariodaoesky.png", caption: "OesKy cumple 1 año" },
    { src: "../../../images/galeria/oeskyecyberpraia.png", caption: "OesKy y Cyberattack en la gangorra" },
    { src: "../../../images/galeria/oeskydeusa.png", caption: "OesKy diosa" },
    { src: "../../../images/galeria/oeskyrainbow.png", caption: "OesKy y sus amigos cayendo" },
    { src: "../../../images/galeria/oeskyaviaodepapel.png", caption: "OesKy en un avión de papel" },
    { src: "../../../images/galeria/oeskysemsinal.png", caption: "OesKy, pero sin señal" },
    { src: "../../../images/galeria/oeskyescuro.png", caption: "OesKy en lo obscuro" },
    { src: "../../../images/galeria/oeskybrasil.png", caption: "¡OesKy es de Brasil!" },
    { src: "../../../images/galeria/oeskyanonovo.png", caption: "OesKy en una nochevieja" },
    { src: "../../../images/galeria/oeskynobalao.png", caption: "OesKy y sus amigos en balones (ft. Pou2tiktok y Cyberattack)" },
    { src: "../../../images/galeria/oeskybaleia.png", caption: "OesKy arrojada por una balena" },
    { src: "../../../images/galeria/oeskycomlupa.png", caption: "OesKy con una pequeña hormiga" },
    { src: "../../../images/galeria/oeskyestrelacadente.png", caption: "OesKy como una estrella fugaz" },
    { src: "../../../images/galeria/oeskyraio.png", caption: "OesKy le cayó un rayo durante una tormenta" },
    { src: "../../../images/galeria/oeskyeestátua.png", caption: "OesKy y su proprio monumento" },
    { src: "../../../images/galeria/oeskycores.png", caption: "OesKy en el Holi Festival!" },
    { src: "../../../images/galeria/oeskyderreteu.png", caption: "OesKy se derritió" },
    { src: "../../../images/galeria/oeskynovulcao.png", caption: "OesKy pasando cerca de un volcán" },
    { src: "../../../images/galeria/oeskynaflecha.png", caption: "Una flecha alcanzó la manzana encima de OesKy" },
    { src: "../../../images/galeria/oeskyflores.png", caption: "OesKy y su jardín lleno de flores" },
    { src: "../../../images/galeria/oeskynotrampolim.png", caption: "OesKy brincando en el trampolín" },
    { src: "../../../images/galeria/oeskynagelatina.png", caption: "OesKy se chocó contra una gelatina" },
    { src: "../../../images/galeria/oeskypipa.png", caption: "OesKy volando una cometa" },
    { src: "../../../images/galeria/oeskychuva.png", caption: "OesKy en la lluvia, pero con el paraguas roto" },
    { src: "../../../images/galeria/oeskycaixa.png", caption: "OesKy en una caja de encomienda" },
    { src: "../../../images/galeria/oeskychiclete.png", caption: "OesKy masticando chicle" },
    { src: "../../../images/galeria/oeskyeharam.png", caption: "HaramHamster retirando a OesKy de un cerro" },
    { src: "../../../images/galeria/oeskyinvertida.png", caption: "OesKy, pero con el color inverso" },
    { src: "../../../images/galeria/oeskyecristais.png", caption: "OesKy en el mundo de cristales" },
    { src: "../../../images/galeria/oeskyboladecristal.png", caption: "OesKy en una bola de cristal" },
    { src: "../../../images/galeria/oeskymaint.png", caption: "OesKy en un servicio" },
    { src: "../../../images/galeria/oeskydormindo.png", caption: "OesKy echándose una siesta" },
    { src: "../../../images/galeria/oeskyabduzida.png", caption: "OesKy siendo abducida por Cyberattack" },
    { src: "../../../images/galeria/oeskyseria.png", caption: "OesKy seria" },
    { src: "../../../images/galeria/oeskynatal.png", caption: "¡OesKy en el clima de navidad!" },
    { src: "../../../images/galeria/oeskymagica-n.png", caption: "OesKy quita a NocTaFly del sombrero mágico" },
    { src: "../../../images/galeria/oeskyburaconegro.png", caption: "OesKy y sus amigos absorbidos por un agujero negro (ft. qlw, Cyberattack & Pou2tiktok" },
    { src: "../../../images/galeria/oeskymagia.png", caption: "OesKy liberando toda su magia congelada" },
    { src: "../../../images/galeria/oeskybalança.png", caption: "OesKy y NocTaFly en una balanza, pero OesKy perdió" },
    { src: "../../../images/galeria/oeskyteatro.png", caption: "OesKy presentando su nuevo sítio" },
    { src: "../../../images/galeria/oeskyserra.png", caption: "OesKy tonta mientras está dentro de una sierra" },
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
  
  // Exibe a primeira imagem ao carregar a página
  updateImage();
  
  // Define um intervalo para alternar as imagens automaticamente
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    fadeOut(() => {
      updateImage();
      fadeIn();
    });
  }, 3000); // Altere as imagens a cada 3 segundos (ajuste conforme necessário)
  