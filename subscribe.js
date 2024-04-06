// subscribe.js

document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const subscribedEmailsContainer = document.getElementById('subscribedEmailsContainer');

    newsletterForm.addEventListener('submit', function (event) { 
        console.log('Form submitted');

        event.preventDefault();
        const email = emailInput.value;
        if (email.trim() !== '') {
            let subscribedEmails = localStorage.getItem('subscribedEmails');
            if (!subscribedEmails) {
                subscribedEmails = [];
            } else {
                subscribedEmails = JSON.parse(subscribedEmails);
            }
            subscribedEmails.push(email);
            localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));

            displaySubscribedEmails(subscribedEmails);
        }
        emailInput.value = '';
    });

    function displaySubscribedEmails(emails) {
        console.log('Displaying subscribed emails:', emails);
        subscribedEmailsContainer.innerHTML = ''; 
        emails.forEach(function (email) {
            const emailItem = document.createElement('div');
            emailItem.textContent = email;
            subscribedEmailsContainer.appendChild(emailItem);
        });
    }

    const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    displaySubscribedEmails(subscribedEmails);
});

