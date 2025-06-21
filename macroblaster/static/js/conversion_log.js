document.getElementById("macro-form").addEventListener("submit", function (e) {
    e.preventDefault();
    navigator.sendBeacon("/convert_landing_page");
});