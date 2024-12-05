document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const navLinks = document.querySelectorAll("#mobile-nav a");

    // Verifica se é um dispositivo móvel com base na largura da tela
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Alterna a visibilidade do menu ao clicar no botão toggle
    menuToggle.addEventListener("click", function () {
        if (isMobile()) {
            mobileNav.style.display =
                mobileNav.style.display === "none" || mobileNav.style.display === ""
                    ? "block"
                    : "none";
        }
    });

    // Fecha o menu ao clicar em qualquer link dentro dele
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (isMobile()) {
                mobileNav.style.display = "none";
            }
        });
    });

    // Garante que o menu sempre feche ao redimensionar para uma tela maior
    window.addEventListener("resize", function () {
        if (!isMobile()) {
            mobileNav.style.display = "none";
        }
    });
});
