document.addEventListener("DOMContentLoaded", function () {
    const containerc = document.querySelector(".estrellas-container");
    const maxStarrsc = 39;
    const removeInterval = 2000;

    function createStarrc() {
        const starc = document.createElement("div");
        starc.classList.add("estrellla");
        starc.style.top = `${Math.random() * 100}%`;
        starc.style.right = `${Math.random() * 100}%`;
        containerc.appendChild(starc);

        setTimeout(() => {
            starc.remove();
        }, removeInterval);
    }

    function createStarrsc() {
        if (containerc.children.length < maxStarrsc) {
            createStarrc();
        }
    }

    setInterval(createStarrsc, 9000);
});
