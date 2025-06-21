document.addEventListener('DOMContentLoaded', function() {
    // Animate the cookie alerts in
    var cookieAlerts = document.querySelectorAll('.cookie-alert');
    cookieAlerts.forEach(function(alert, index) {
        setTimeout(function() {
            alert.classList.add('show');
        }, index * 1000);
    });

    // Hook up the "Close Message" buttons
    var closeButtons = document.querySelectorAll('.cookie-alert .hide');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // prevent default link behavior

            // Hide the closest cookie-alert container
            var alertBox = button.closest('.cookie-alert');
            if (alertBox) {
                alertBox.style.display = 'none';
            }

            // Set the 'message_viewed_closed' cookie for 1 year
            document.cookie = "message_viewed_closed=true; max-age=31536000; path=/";
        });
    });
});