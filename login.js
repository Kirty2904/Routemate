document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Replace with actual authentication logic
        if (email === "user@example.com" && password === "password123") {
            // Redirect to main app
            window.location.href = "index.html";
        } else {
            errorMessage.textContent = "Invalid email or password. Please try again.";
        }
    });
});