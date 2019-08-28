var search = document.querySelector(".fa-search")
search.addEventListener("click", function () {
    // console.log(search)
    document.querySelector(".search").style.display = "block";
})

document.querySelector(".fa-times").parentNode.addEventListener("click", function () {
    document.querySelector(".search").style.display = "none";
})