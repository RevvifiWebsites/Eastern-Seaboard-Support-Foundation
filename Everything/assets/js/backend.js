document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded"); // Debugging log

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log(`Username: ${username}, Password: ${password}`); // Debugging log

        // Define the correct username and password
        const correctUsername = 'admin';
        const correctPassword = 'password123';

        // Check if the entered credentials match the correct ones
        if (username === correctUsername && password === correctPassword) {
            console.log("Credentials are correct, redirecting..."); // Debugging log
            // Redirect to another page
            window.location.href = 'Everything/spreadsheet-upload.html';
        } else {
            console.log("Incorrect username or password"); // Debugging log
            alert('Incorrect username or password. Please try again.');
        }
    });
});
