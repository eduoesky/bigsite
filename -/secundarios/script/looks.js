const imagess = [
  { src: "../images/galeria/looks/look 20.png", caption: "Look OesKy 2020", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1Kv3E2hzHiWJfTbH1f_SoMVewFs5M0VzD&export=download"},
  { src: "../images/galeria/looks/halloween's look 20.png", caption: "Look OesKy Halloween 2020", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1Q88g6JYjPBUlLH8fJrSbLcWalvNlFhgK&export=download"},
  { src: "../images/galeria/looks/easter's look 2122.png", caption: "Look OesKy Easter 2021 & 2022", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1nqldX87aEyYl5OjKm9u8ljAWUiyU-I2A&export=download"},
  { src: "../images/galeria/looks/halloween's look 21.png", caption: "Look OesKy Halloween 2021", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1m_PbVOejqImwxY3FGVPND2bG0jC4r4Ay&export=download"},
  { src: "../images/galeria/looks/christmas' look 21.png", caption: "Look OesKy Christmas 2021", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=13Q3djHD87W0nAn9ZrS0cW93SMlWCkCb-&export=download"},
  { src: "../images/galeria/looks/look 21.png", caption: "Look OesKy 2021", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1RcMZ4JbJai5_ZBa-L7bhlvUc690ln4X4&export=download"},
  { src: "../images/galeria/looks/woman's look 22.png", caption: "Look OesKy Woman's Day 2022", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1sTvCmDGLsCmAqUXdh82bEVQZf5K9GwVt&export=download"},
  { src: "../images/galeria/looks/chocolate's look.png", caption: "Look OesKy Chocolate's day", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1VoC3dWnyL4oiVvVb9p1XzADRB2Z8K9-P&export=download"},
  { src: "../images/galeria/looks/halloween's look 22.png", caption: "Look OesKy Halloween 2022", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1mjnh4OFf7snF_u1bYk3LpzBL2vhDrpmC&export=download"},
  { src: "../images/galeria/looks/worldcup's look 22.png", caption: "Look OesKy World Cup 2022", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1ho-6WFuR2LGf5DWQDo_vkseMaPPzodJp&export=download"},
  { src: "../images/galeria/looks/christmas' look 22.png", caption: "Look OesKy Christmas 2022", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=17HyVevS7vuNzrdxqrcXH_3m009dDmIz_&export=download"},
  //{ src: "../images/galeria/looks/look 22.png", caption: "Look OesKy 2022", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=&export=download"},//
  { src: "../images/galeria/looks/easter's look 23.png", caption: "Look OesKy Easter 2023", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1mcFlssgUcQqfDkPKblYbvBWQboWR4Rji&export=download"},
  { src: "../images/galeria/looks/halloween's look 23.png", caption: "Look OesKy Halloween 2023", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1el3VEX3aXIEAv1LO0LQTVSjKn3MRTJHU&export=download"},
  { src: "../images/galeria/looks/christmas' look 23.png", caption: "Look OesKy Christmas 2023", downloadUrl: "https://drive.usercontent.google.com/u/0/uc?id=1buHxMINsJf7b09EyES4TawMGXC4NQ05r&export=download"},
];

let currenttIndex = 0;

const prevButton1 = document.getElementById("prev1");
const nextButton1 = document.getElementById("next1");
const imageeContainer = document.querySelector(".image-container1");
const captionnElement = document.createElement("p");
captionnElement.className = "image-caption1";

prevButton1.addEventListener("click", () => {
  currenttIndex = (currenttIndex - 1 + imagess.length) % imagess.length;
  fadeeOut(() => {
    updateeImage();
    fadeeIn();
  });
});

nextButton1.addEventListener("click", () => {
  currenttIndex = (currenttIndex + 1) % imagess.length;
  fadeeOut(() => {
    updateeImage();
    fadeeIn();
  });
});

function updateeImage() {
  const currentImage = imagess[currenttIndex];
  const imageUrl = currentImage.src;
  const downloadUrl = currentImage.downloadUrl;
  imageeContainer.innerHTML = `<a href="${downloadUrl}" download><img src="${imageUrl}" alt="Imagem ${currenttIndex + 1}"></a>`;
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

let slideInterval = setInterval(() => {
  currenttIndex = (currenttIndex + 1) % imagess.length;
  fadeeOut(() => {
    updateeImage();
    fadeeIn();
  });
}, 5000);

imageeContainer.addEventListener("mouseover", () => {
  clearInterval(slideInterval);
});

imageeContainer.addEventListener("mouseout", () => {
  slideInterval = setInterval(() => {
    currenttIndex = (currenttIndex + 1) % imagess.length;
    fadeeOut(() => {
      updateeImage();
      fadeeIn();
    });
  }, 5000);
});
