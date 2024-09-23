document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let valid = true;

    // Clear previous error messages
    clearErrors();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById("country").value;
    const terms = document.getElementById("terms").checked;

    // Name validation
    if (!name) {
        valid = false;
        document.getElementById("nameError").textContent = "Name is required.";
    }

    // Email validation
    if (!validateEmail(email)) {
        valid = false;
        document.getElementById("emailError").textContent = "Invalid email format.";
    }

    // Password validation
    if (password.length < 8) {
        valid = false;
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    }

    // Age validation
    if (age < 18 || age > 100 || isNaN(age)) {
        valid = false;
        document.getElementById("ageError").textContent = "Please enter a valid age between 18 and 100.";
    }

    // Gender validation
    if (!gender) {
        valid = false;
        document.getElementById("genderError").textContent = "Please select your gender.";
    }

    // Country validation
    if (country === "") {
        valid = false;
        document.getElementById("countryError").textContent = "Please select your country.";
    }

    // Terms validation
    if (!terms) {
        valid = false;
        document.getElementById("termsError").textContent = "You must agree to the terms and conditions.";
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    let valid = true;

    // Clear previous error messages
    clearErrors();

    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value;

    // Email validation
    if (!validateEmail(loginEmail)) {
        valid = false;
        document.getElementById("loginEmailError").textContent = "Invalid email format.";
    }

    // Password validation
    if (!loginPassword) {
        valid = false;
        document.getElementById("loginPasswordError").textContent = "Password is required.";
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    }
});

// Helper functions
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.textContent = '');
}
