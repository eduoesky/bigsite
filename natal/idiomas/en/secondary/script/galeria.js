const images = [
    { src: "../../../images/galeria/oeskynapraia.png", caption: "OesKy at the beach" },
    { src: "../../../images/galeria/oeskychoque.png", caption: "OesKy getting an electric shock" },
    { src: "../../../images/galeria/oeskybaldeagua.png", caption: "A bucket of water fell on OesKy's head" },
    { src: "../../../images/galeria/oeskygelo.png", caption: "OesKy frozen" },
    { src: "../../../images/galeria/oeskysurfando.png", caption: "OesKy is surfing" },
    { src: "../../../images/galeria/oeskynochapeu.png", caption: "OesKy in her own hat" },
    { src: "../../../images/galeria/oeskynocometa.png", caption: "OesKy on a meteor" },
    { src: "../../../images/galeria/oeskynoaviao.png", caption: "OesKy piloting an airplane" },
    { src: "../../../images/galeria/oeskypintando.png", caption: "OesKy is painting" },
    { src: "../../../images/galeria/oeskycompocao.png", caption: "OesKy conducting chemical experiments" },
    { src: "../../../images/galeria/oeskynasnuvens.png", caption: "OesKy in the clouds" },
    { src: "../../../images/galeria/oeskylua.png", caption: "OesKy at the moon" },
    { src: "../../../images/galeria/oeskytomandobanho.png", caption: "OesKy is taking a shower" },
    { src: "../../../images/galeria/oeskynumincendio.png", caption: "OesKy in a fire" },
    { src: "../../../images/galeria/oeskyapaixonada.png", caption: "OesKy is loved" },
    { src: "../../../images/galeria/oeskynanave.png", caption: "OesKy in an alien spaceship" },
    { src: "../../../images/galeria/oeskyespaçosideral.png", caption: "OesKy in sideral space" },
    { src: "../../../images/galeria/oeskyefantasmas.png", caption: "OesKy with ghosts" },
    { src: "../../../images/galeria/oeskyseacidenta.png", caption: "OesKy hits the plane into the wall" },
    { src: "../../../images/galeria/aniversariodaoesky.png", caption: "OesKy completes 1 year" },
    { src: "../../../images/galeria/oeskyecyberpraia.png", caption: "OesKy and Cyberattack on a seesaw" },
    { src: "../../../images/galeria/oeskydeusa.png", caption: "OesKy goddess" },
    { src: "../../../images/galeria/oeskyrainbow.png", caption: "OesKy and her friends falling" },
    { src: "../../../images/galeria/oeskyaviaodepapel.png", caption: "OesKy on a paperplane" },
    { src: "../../../images/galeria/oeskysemsinal.png", caption: "OesKy, but no signal" },
    { src: "../../../images/galeria/oeskyescuro.png", caption: "OesKy in the dark" },
    { src: "../../../images/galeria/oeskybrasil.png", caption: "¡OesKy is from Brazil!" },
    { src: "../../../images/galeria/oeskyanonovo.png", caption: "OesKy in a Revèillon" },
    { src: "../../../images/galeria/oeskynobalao.png", caption: "OesKy and her friends in balloons (ft. Pou2tiktok & Cyberattack)" },
    { src: "../../../images/galeria/oeskybaleia.png", caption: "OesKy ejected by a whale" },
    { src: "../../../images/galeria/oeskycomlupa.png", caption: "OesKy with a little ant" },
    { src: "../../../images/galeria/oeskyestrelacadente.png", caption: "OesKy as a shooting star" },
    { src: "../../../images/galeria/oeskyraio.png", caption: "OesKy getting an electric shock by a ray" },
    { src: "../../../images/galeria/oeskyeestátua.png", caption: "OesKy and herself monument" },
    { src: "../../../images/galeria/oeskycores.png", caption: "OesKy in a Holi Festival!" },
    { src: "../../../images/galeria/oeskyderreteu.png", caption: "OesKy is melted" },
    { src: "../../../images/galeria/oeskynovulcao.png", caption: "OesKy passing by a volcano" },
    { src: "../../../images/galeria/oeskynaflecha.png", caption: "An arrow hits the apple on OesKy's head" },
    { src: "../../../images/galeria/oeskyflores.png", caption: "OesKy and her garden full of flowers" },
    { src: "../../../images/galeria/oeskynotrampolim.png", caption: "OesKy jumping on the trampoline" },
    { src: "../../../images/galeria/oeskynagelatina.png", caption: "OesKy hits into the jelly" },
    { src: "../../../images/galeria/oeskypipa.png", caption: "OesKy flying a kite" },
    { src: "../../../images/galeria/oeskychuva.png", caption: "OesKy in the rain, but with broken umbrella" },
    { src: "../../../images/galeria/oeskycaixa.png", caption: "OesKy in a package box" },
    { src: "../../../images/galeria/oeskychiclete.png", caption: "OesKy chewing gum" },
    { src: "../../../images/galeria/oeskyeharam.png", caption: "HaramHamster removing OesKy from the hill" },
    { src: "../../../images/galeria/oeskyinvertida.png", caption: "OesKy, but with inverse color" },
    { src: "../../../images/galeria/oeskyecristais.png", caption: "OesKy in the crystal world" },
    { src: "../../../images/galeria/oeskyboladecristal.png", caption: "OesKy in a crystal ball" },
    { src: "../../../images/galeria/oeskymaint.png", caption: "OesKy in a service" },
    { src: "../../../images/galeria/oeskydormindo.png", caption: "OesKy sleeping a bit" },
    { src: "../../../images/galeria/oeskyabduzida.png", caption: "OesKy abducted by Cyberattack" },
    { src: "../../../images/galeria/oeskyseria.png", caption: "OesKy serious" },
    { src: "../../../images/galeria/oeskynatal.png", caption: "OesKy in the Christmas spirit!" },
    { src: "../../../images/galeria/oeskymagica-n.png", caption: "OesKy pulling a NocTaFly out of a top hat" },
    { src: "../../../images/galeria/oeskyburaconegro.png", caption: "OesKy and her friends being sucked into a black hole (ft. qlw, Cyberattack & Pou2tiktok" },
    { src: "../../../images/galeria/oeskymagia.png", caption: "OesKy releasing al of her frozen magic" },
    { src: "../../../images/galeria/oeskybalança.png", caption: "OesKy and NocTaFly on the balance, but OesKy lost" },
    { src: "../../../images/galeria/oeskyteatro.png", caption: "OesKy showing her new website" },
    { src: "../../../images/galeria/oeskyserra.png", caption: "OesKy dizzy while inside a saw" },
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
  