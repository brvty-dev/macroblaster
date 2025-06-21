document.addEventListener("DOMContentLoaded", function() {
    const switchInput = document.getElementById("cookie-switch");
    const formInput = document.querySelector("input[name='cookie_preference']");
  
    // Set initial value
    formInput.value = switchInput.checked ? "accept" : "reject";
  
    // Update form input value when switch state changes
    switchInput.addEventListener("change", function() {
      formInput.value = this.checked ? "accept" : "reject";
    });
  });