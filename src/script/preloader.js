window.addEventListener("DOMContentLoaded", () => {

    let preloaderTitle = document.getElementById("preloader-title");

    setTimeout(() => {
        preloaderTitle.classList.add("active");
    }, 500);

    setTimeout(() => {
        let preloaderBottomContent = document.getElementById("bottom-content");
        let preloaderThemesMode = document.getElementById("themes-mode");
        preloaderBottomContent.classList.add("active");
        preloaderThemesMode.classList.add("active");
    }, 2000);

    setTimeout(() => {
        let preloaderScrollDown = document.getElementById("scroll-down");
        preloaderScrollDown.classList.add("active");
    }, 2000 + 1500);

})
