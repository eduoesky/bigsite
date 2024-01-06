const openMenuButton = document.getElementById('openMenuButton');
const closeMenuButton = document.getElementById('closeMenuButton');
const menu = document.getElementById('menu');

openMenuButton.addEventListener('click', () => {
    menu.style.left = '0';
});

closeMenuButton.addEventListener('click', () => {
    menu.style.left = '-300px';
});