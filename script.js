const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".sidebar-nav");

menu.addEventListener("click", () =>{
    sidebar.classList.toggle("collapsed");
});

navLinks.addEventListener("click", () => {
        sidebar.classList.remove("collapsed");
    });



  function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
      if (category === 'all' || project.classList.contains(category)) {
        project.style.display = 'inline-block';
      } else {
          project.style.display = 'none';
        }
      });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
  
    timelineItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`;
    });
  });
  

  