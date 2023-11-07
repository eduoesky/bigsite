document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".estrellas-container");
    const maxStarrs = 3;
    const removeInterval = 2000; // Intervalo para remover uma estrela (1 segundo)

    function createStarr() {
        const starB = document.createElement("div");
        starB.classList.add("estrella");
        starB.style.top = `${Math.random() * 100}%`;
        starB.style.left = `${Math.random() * 100}%`;
        container.appendChild(starB);

        setTimeout(() => {
            starB.remove();
        }, removeInterval);
    }

    function createStarrs() {
        if (container.children.length < maxStarrs) {
            createStarr();
        }
    }

    setInterval(createStarrs, 8000);
});
