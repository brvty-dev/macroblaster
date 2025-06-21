document.addEventListener("DOMContentLoaded", function () {
    let openMapsButton = document.getElementById("openMapsButton");
    openMapsButton.addEventListener("click", findGym);

    let openMapsMenuButton = document.getElementById("openMapsMenuButton");
    openMapsMenuButton.addEventListener("click", findGym);
});

function findGym() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let url = `https://www.google.com/maps/search/gyms/@${latitude},${longitude},15z`;
            window.open(url, "_blank");
        }, function (error) {
            console.error("Error getting location:", error.message);
        });
    } else {
        window.alert("Geolocation is not supported by your browser");
    }
}