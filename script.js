const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".sidebar-nav");

menu.addEventListener("click", () =>{
    sidebar.classList.toggle("collapsed");
});

navLinks.addEventListener("click", () => {
        sidebar.classList.remove("collapsed");
    });

function filterProjects(tech) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (tech === 'all' || project.classList.contains(tech)) {
            project.style.display = 'inline-block';
        } else {
            project.style.display = 'none';
        }
    });
}
