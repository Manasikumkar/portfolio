console.log("Portfolio loaded successfully!");

emailjs.init("f3xLKHYyBnVsddikM");

document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {

        contactForm.addEventListener('submit', function (e) {

            e.preventDefault();

            // Get form values
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Send email using EmailJS
            emailjs.send(
                "service_25qi64c",
                "template_vapz2ad",
                templateParams
            )

            .then(function (response) {

                console.log('SUCCESS!', response.status, response.text);

                formMessage.style.display = 'block';
                formMessage.style.color = 'lightgreen';
                formMessage.textContent =
                    "Message sent successfully! I'll get back to you soon.";

                contactForm.reset();

                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);

            })

            .catch(function (error) {

                console.log('FAILED...', error);

                formMessage.style.display = 'block';
                formMessage.style.color = 'red';
                formMessage.textContent =
                    "Failed to send message. Please try again.";

            });

        });

    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });

            }

        });

    });

});