var search = document.querySelector(".fa-search")
search.addEventListener("click", function () {
    // console.log(search)
    document.querySelector(".search").style.display = "block";
})

document.querySelector(".fa-times").parentNode.addEventListener("click", function () {
    document.querySelector(".search").style.display = "none";
})

var navbartoggler = document.querySelector(".navbar-toggler");
navbartoggler.addEventListener("click", function () {
    var toggler = document.querySelector(".toggler")
    toggler.childNodes[1].classList.toggle("isactive")
    toggler.childNodes[3].classList.toggle("isactive")
    toggler.childNodes[5].classList.toggle("isactive")

    // anime({
    //     targets: this.childNodes[1],
    //     rotateX: "360deg" // -> '540deg'
    // });
})