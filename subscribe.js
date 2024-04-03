document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value;

        if (email.trim() !== '') {
            // Save email to local storage
            saveEmailToLocalStorage(email);
            alert('Thank you for Subscribing WildVibe!');
            form.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function saveEmailToLocalStorage(email) {
        let existingEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
        existingEmails.push(email);
        localStorage.setItem('subscribedEmails', JSON.stringify(existingEmails));
    }
});
