document.addEventListener("DOMContentLoaded", function () {
    const containerd = document.querySelector(".estrellas-container");
    const maxStarrsd = 1;
    const removeInterval = 2000;

    function createStarrd() {
        const stard = document.createElement("div");
        stard.classList.add("estrelllla");
        stard.style.top = "0";
        stard.style.right = `${Math.random() * 100}%`;
        containerd.appendChild(stard);

        setTimeout(() => {
            stard.remove();
        }, removeInterval);
    }

    function createStarrsd() {
        if (containerd.children.length < maxStarrsd) {
            createStarrd();
        }
    }

    setInterval(createStarrsd, 1000);
});