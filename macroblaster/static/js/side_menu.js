let menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", openNav);

let closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", closeNav);


function openNav() {
    document.getElementById("mySidenav").style.width = "45vw";
}
  

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}