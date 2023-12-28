let preloaderWord = document.querySelectorAll('.preloader-title-word');

window.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        let preloaderDummy = document.querySelectorAll('.preloader-dummy');
        preloaderDummy.forEach(preloaderDummy => {
            preloaderDummy.classList.add('animation')
        });
    }, 500);

    setTimeout(() => {
        preloaderWord.forEach((preloaderWord, idx) => {
            setTimeout(() => {
                preloaderWord.classList.add('animation');
            }, (idx + 1) * 100);
        });
    }, 1800);
});