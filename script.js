console.log("Portfolio loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
    // 1. FORM SUBMISSION HANDLING
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you can:
            // Option A: Send to your email using Formspree/EmailJS (recommended)
            // Option B: Log to console for now
            console.log('Contact Form Submission:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Subject:', subject);
            console.log('Message:', message);
            
            // Show success message
            formMessage.style.display = 'block';
            formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    // 2. SMOOTH SCROLLING FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // 3. CV DOWNLOAD FUNCTIONALITY
    const downloadCVBtn = document.querySelector('.btn-outline-pink');
    
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener('click', function(e) {
            // This triggers the download via HTML5 download attribute
            // No need for extra JavaScript if you have download attribute
            console.log('Downloading CV...');
        });
    }
});