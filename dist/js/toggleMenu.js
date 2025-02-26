document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("nav-menu"); 
    const header = document.querySelector("header");
    menuButton.addEventListener("click", function () {
        menu.classList.toggle("menu-open");
        menu.classList.toggle("menu-closed");
        header.classList.toggle("closed");
        header.classList.toggle("open-header");
    });
});
