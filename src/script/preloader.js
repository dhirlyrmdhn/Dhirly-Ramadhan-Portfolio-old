let preloaderWord = document.querySelectorAll('.preloader-title-word');
let preloaderDummy = document.querySelectorAll('.preloader-dummy');

window.addEventListener("DOMContentLoaded", () => {

    if (window.scrollY === 0) {
        setTimeout(() => {
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
    } else {
        // preloaderDummy.forEach(preloaderDummy => {
        //     preloaderDummy.classList.add('animation')
        // });
        preloaderWord.forEach(preloaderWord => {
            preloaderWord.classList.add('animation')
        });
    }

});