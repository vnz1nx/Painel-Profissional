document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const navLinks = document.querySelectorAll("#mobile-nav a"); 
    menuToggle.addEventListener("click", function () {
        mobileNav.style.display =
            mobileNav.style.display === "none" || mobileNav.style.display === ""
                ? "block"
                : "none";
    });

    // Fechar o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileNav.style.display = "none";
        });
    });
});
