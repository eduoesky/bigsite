document.addEventListener("DOMContentLoaded", function () {
    const containere = document.querySelector(".estrellas-container");
    const maxStarrse = 30;
    const removeInterval = 2000;

    function createStarre() {
        const stare = document.createElement("div");
        stare.classList.add("estrellllla");
        stare.style.top = `${Math.random() * 100}%`;
        stare.style.right = "0";
        containere.appendChild(stare);

        setTimeout(() => {
            stare.remove();
        }, removeInterval);
    }

    function createStarrse() {
        if (containere.children.length < maxStarrse) {
            createStarre();
        }
    }

    setInterval(createStarrse, 1000);
});
