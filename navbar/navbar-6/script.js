var navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", animeToggler)
function animeToggler() {
    var collapser = document.querySelector(".expand")
    if (collapser.style.height === "" || collapser.style.height === "0%") {
        anime({
            targets: collapser,
            direction: 'normal',
            easing: 'easeInOutExpo',
            height: ['0%', '100%']
        });
    }
    else {
        anime({
            targets: collapser,
            direction: 'normal',
            easing: 'easeInOutExpo',
            height: [collapser.style.height, '0%']
        });
    }
}