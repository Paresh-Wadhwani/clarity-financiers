document.getElementById('contactForm').addEventListener
(
    'submit',
    function (event)
    {
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!phone && !email)
        {
            event.preventDefault(); // Stop form submission
            alert('Please provide either a Phone Number or an Email Address so we can reach you.');
        }
    }
);
