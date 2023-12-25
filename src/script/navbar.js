window.addEventListener("scroll", () => {

    let preloaderSection = document.getElementById("preloader");

    preloaderSection.classList.toggle("nav", window.scrollY >= 1);
    
});