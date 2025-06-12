document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile navigation menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link (for better UX on mobile)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Toggle active class on skills when clicked
  const skills = document.querySelectorAll(".skills-list li");
  skills.forEach(skill => {
    skill.addEventListener("click", () => {
      skill.classList.toggle("active");
    });
  });
});
