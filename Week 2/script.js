document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const centerNav = document.querySelector(".centerNav");

    hamburger.addEventListener("click", () => {
        centerNav.classList.toggle("show");
    });
});
