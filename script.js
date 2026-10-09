// Show/hide content sections
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll("main > div");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = event.target.getAttribute("href").substring(1);
            pages.forEach((page) => {
                page.classList.toggle("active", page.id === target);
            });
        });
    });
});

// Show footer only at bottom
window.addEventListener("scroll", function () {
    var pageFooter = document.getElementById("page-footer");
    if (pageFooter) {
        pageFooter.style.display =
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight
            ? "block" : "none";
    }
});

// Mobile hamburger menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });
}
