const link = document.querySelectorAll(".nav-link");
for (var i = 0; i < link.length; i++) {

    link[i].addEventListener("mouseover", function () {
        let x = this.nextSibling.nextSibling;
        // console.log(x);
        anime({
            targets: x,
            width: '75%',
            easing: 'easeInOutExpo'
            // textDecoration: "underline"
            // backgroundColor: '#FF0000'
        });
    })
    link[i].addEventListener("mouseout", function () {
        let y = this.nextSibling.nextSibling;
        // console.log(x);
        anime({
            targets: y,
            width: '0%'
            // textDecoration: "underline"
            // backgroundColor: '#FF0000'
        });
    })
}
