var toggler = document.querySelector(".toggler");
toggler.addEventListener("click", animeToggler
    // anime({
    //     targets: this.childNodes[1],
    //     rotateX: "360deg" // -> '540deg'
    // });
)
function animeToggler() {
    this.childNodes[1].classList.toggle("isactive")
    this.childNodes[3].classList.toggle("isactive")
    this.childNodes[5].classList.toggle("isactive")
    var collapser = document.getElementById("navbarSupportedContent");
    if (collapser.style.width === "" || collapser.style.width === "0%") {
        // console.log("Expanded" + collapser.style.width)
        anime({
            targets: collapser,
            direction: 'normal',
            easing: 'easeInOutExpo',
            width: ['0%', '26.686%']
        });
    }
    else {
        // console.log("collapsing" + collapser.style.width)
        anime({
            targets: collapser,
            easing: 'easeInOutExpo',
            width: [collapser.style.width, '0%']
        });
        // console.log("collapsing" + collapser.style.width)
    }

    // console.log(typeof ("2.2%"));

}
// function animecollapse() {

// }
