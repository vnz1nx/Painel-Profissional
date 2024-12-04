// script.js
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Fecha a sidebar
    } else {
        sidebar.style.left = '0px'; // Abre a sidebar
    }
});

