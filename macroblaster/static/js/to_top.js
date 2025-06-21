let toTop = document.getElementById("toTop");
toTop.addEventListener("click", toTopFunction);

function toTopFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}