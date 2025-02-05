document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#mobile-nav a");
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link dentro dele
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileNav.classList.remove('active'); // Fecha o menu ao clicar no link
        });
    });

    // Garante que o menu sempre feche ao redimensionar para uma tela maior
    window.addEventListener("resize", function () {
        if (!isMobile()) {
            mobileNav.classList.remove('active'); // Remove a classe "active" em telas grandes
        }
    });
});
