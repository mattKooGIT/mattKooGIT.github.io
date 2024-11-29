// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission to simulate a delay

    const submitButton = document.getElementById("submitButton");
    const loadingButton = document.getElementById("loadingButton");

    // Add class to show loading spinner and hide submit button
    this.classList.add("show-loading");

    // Simulate form submission delay (e.g., server-side processing)
    setTimeout(() => {
        // After the "loading" phase, reset the form
        this.reset();  // Reset all form fields
        this.classList.remove("show-loading");  // Hide the loading spinner and show the submit button again

        // Optionally, show an alert or confirmation message
        alert("Form has been submitted!");

    }, 1500);  // Simulate a 1.5-second delay for form submission
});