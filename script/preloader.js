let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.toggle('active');
            }, (idx + 1) * 300)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.toggle('fade');
                }, (idx + 1) * 50 )
            })
        }, 6000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 6500)

    })

})
