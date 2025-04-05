document.getElementById('contactForm').addEventListener('submit', function (e) {
    // Basic form validation (optional since HTML5 validation is also present)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill all required fields');
        return;
    }

    // The actual submission will be handled by Web3Forms
    // No need to prevent default or show alert here, as the API handles it
});