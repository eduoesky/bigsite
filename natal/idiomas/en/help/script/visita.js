
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.querySelector(".visfall").appendChild(snowflake);

    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = 0;
    snowflake.style.left = startPositionX + "px";
    snowflake.style.top = startPositionY + "px";

    const animationDuration = Math.random() * 10 + 2;
    snowflake.style.animationDuration = animationDuration + "s";

    const size = Math.random() * 32 + 16; 
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";

    const rotation = Math.random() * 10000;
    snowflake.style.transform = `rotate(${rotation}deg)`;

    snowflake.addEventListener("animationiteration", () => {
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = -50 + "px";
    });
}

for (let i = 0; i < 10; i++) {
    createSnowflake();
}
