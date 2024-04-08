document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        if (email !== '') {
            let subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
            
            subscribedEmails.push(email);
            localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
        }
    });
});

