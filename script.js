// JavaScript for form interaction
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if the fields are filled
    if (name && email && message) {
        document.getElementById("form-message").innerText = "Thank you for your message, " + name + "!";
        document.getElementById("contact-form").reset();  // Reset the form
    } else {
        document.getElementById("form-message").innerText = "Please fill out all fields.";
    }
});

