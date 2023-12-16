window.addEventListener("scroll", () => {

    let preloaderTitle = document.getElementById("preloader-title");
    let preloaderBottomContent = document.getElementById("bottom-content");
    let preloader = document.getElementById("preloader");
    let preloaderThemesMode = document.getElementById("themes-mode");

    let navMenuToggle = document.getElementById("menu-toggle");

    preloaderBottomContent.classList.remove("active", window.scrollY >= 1);
    preloaderThemesMode.classList.remove("active", window.scrollY >= 1);
    preloader.classList.toggle("nav", window.scrollY >= 1);
    preloaderTitle.classList.toggle("navbar-title", window.scrollY >= 1);

    navMenuToggle.classList.toggle("active", window.scrollY >= 1);
    
});

let scrolllDown = document.getElementById("scroll-down");
scrolllDown.addEventListener("click", () => {
    window.scrollTo(0, 1);
});