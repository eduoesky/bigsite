if (window.innerWidth < 768) {
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.querySelector(".snowfall").appendChild(snowflake);

    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -50;
    snowflake.style.left = startPositionX + "px";
    snowflake.style.top = startPositionY + "px";

    const animationDuration = Math.random() * 10 + 2; // entre 2s e 32s
    snowflake.style.animationDuration = animationDuration + "s";

    const size = Math.random() * 32 + 16; // entre 16px e 48px
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";

    const rotation = Math.random() * 480; // de 0 a 480° (máx 360)
    snowflake.style.transform = `rotate(${rotation}deg)`;

    snowflake.addEventListener("animationiteration", () => {
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = -50 + "px";
    });
}

//(quantidade das casinhas) = 40 a cada
for (let i = 0; i < 40; i++) {
    createSnowflake();
}
}