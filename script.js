// JavaScript for showing and hiding content
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll("main > div");

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = event.target.getAttribute("href").substring(1);
            pages.forEach((page) => {
                if (page.id === target) {
                    page.classList.add("active");
                } else {
                    page.classList.remove("active");
                }
            });
        });
    });
});
