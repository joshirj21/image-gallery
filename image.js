const link = document.querySelectorAll(".nav-link");
for (var i = 1; i < link.length; i++) {

    link[i].addEventListener("mouseover", function () {
        let x = this.nextSibling.nextSibling;
        anime({
            targets: x,
            width: '75%',
            easing: 'easeInOutExpo'
        });
    })
    link[i].addEventListener("mouseout", function () {
        let y = this.nextSibling.nextSibling;
        anime({
            targets: y,
            width: '0%'
        });
    })
}
