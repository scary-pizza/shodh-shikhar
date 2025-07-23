// header javascript

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});

const navLinks = document.querySelectorAll(".nav-link");
const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  // Match either relative URL or anchor
  if (href === currentPath || (href !== "#" && currentPath.endsWith(href))) {
    link.classList.add("active");
  }

  // Optional: highlight clicked anchor nav (for SPA)
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
