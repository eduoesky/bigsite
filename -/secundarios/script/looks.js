const imagess = [
    { src: "../images/galeria/looks/look 20.png", caption: "Look OesKy 2020" },
    { src: "../images/galeria/looks/halloween's look 20.png", caption: "Look OesKy Halloween 2021" },
    { src: "../images/galeria/looks/easter's look 2122.png", caption: "Look OesKy Easter 2021 & 2022" },
    { src: "../images/galeria/looks/christmas' look 21.png", caption: "Look OesKy Christmas 2021" },
    { src: "../images/galeria/looks/look 21.png", caption: "Look OesKy 2021" },
    { src: "../images/galeria/looks/woman's look 22.png", caption: "Look OesKy Woman's Day 2022" },
    { src: "../images/galeria/looks/chocolate's look.png", caption: "Look OesKy Chocolate's day" },
    { src: "../images/galeria/looks/halloween's look 22.png", caption: "Look OesKy Halloween 2022" },
    { src: "../images/galeria/looks/worldcup's look 22.png", caption: "Look OesKy World Cup 2022" },
    { src: "../images/galeria/looks/christmas' look 22.png", caption: "Look OesKy Christmas 2022" },
    { src: "../images/galeria/looks/look 22.png", caption: "Look OesKy 2022" },
    { src: "../images/galeria/looks/easter's look 23.png", caption: "Look OesKy Easter 2023" },
    { src: "../images/galeria/looks/christmas' look 23.png", caption: "Look OesKy Christmas 2023" },
    
  ];
  let currenttIndex = 0;
  
  const prevButton1 = document.getElementById("prev1");
  const nextButton1 = document.getElementById("next1");
  const imageeContainer = document.querySelector(".image-container1");
  const captionnElement = document.createElement("p");
  captionnElement.className = "image-caption1";
  
  prevButton1.addEventListener("click", () => {
    currenttIndex = (currenttIndex - 1 + imagess.length) % images.length;
    fadeOut(() => {
      updateeImage();
      fadeeIn();
    });
  });
  
  nextButton1.addEventListener("click", () => {
    currenttIndex = (currenttIndex + 1) % imagess.length;
    fadeOut(() => {
      updateeImage();
      fadeeIn();
    });
  });
  
  function updateeImage() {
    const currentImage = imagess[currenttIndex];
    const imageUrl = currentImage.src;
    imageeContainer.innerHTML = `<img src="${imageUrl}" alt="Imagem ${currenttIndex + 1}">`;
    captionnElement.textContent = currentImage.caption;
    imageeContainer.appendChild(captionnElement);
  }
  
  function fadeeIn() {
    imageeContainer.style.opacity = 0;
    imageeContainer.style.transition = "opacity 0.5s";
    setTimeout(() => {
      imageeContainer.style.opacity = 1;
    }, 10);
  }
  
  function fadeeOut(callback) {
    imageeContainer.style.opacity = 0;
    imageeContainer.style.transition = "opacity 0.5s";
    setTimeout(() => {
      callback();
    }, 500);
  }
  

  updateeImage();
    setInterval(() => {
    currenttIndex = (currenttIndex + 1) % imagess.length;
    fadeeOut(() => {
      updateeImage();
      fadeeIn();
    });
  }, 5000); //5s