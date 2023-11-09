document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".estrelas-container");
    const maxStars = 90;
    const removeInterval = 2000;

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("estrela");
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        container.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, removeInterval);
    }

    function createStars() {
        if (container.children.length < maxStars) {
            createStar();
        }
    }

    setInterval(createStars, 10);
});