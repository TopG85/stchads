<!-- ...existing code... -->
<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Form handling (legacy safeguarding form - keeping for compatibility)
        const form = document.getElementById('safeguarding-form');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const formData = new FormData(form);
                const urgency = formData.get('urgency');
                const message = formData.get('message');
                const email = formData.get('email');
                const emailInput = document.getElementById('email');
                const emailFeedback = document.getElementById('email-feedback');

                // Validation
                if (!urgency) {
                    alert('Please select an urgency level.');
                    return;
                }
                if (!message || message.trim().length < 10) {
                    alert('Please provide more details about your concern (at least 10 characters).');
                    return;
                }
                if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    emailInput.classList.add('is-invalid');
                    emailFeedback.style.display = 'block';
                    emailInput.focus();
                    return;
                } else {
                    emailInput.classList.remove('is-invalid');
                    emailFeedback.style.display = 'none';
                }

                // Response based on urgency
                let alertMessage = `Thank you for your report. Your concern has been recorded and will be reviewed by our safeguarding team.\n\nReference ID: SAF-${Date.now().toString().slice(-6)}`;

                alert(alertMessage);
                form.reset();
            });
        }

        // Mobile navigation auto-collapse (fix for all devices and dropdowns)
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item');
        const navCollapse = document.querySelector('.navbar-collapse');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navCollapse).hide();
                }
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navbarHeight = 90; // Account for fixed navbar height
                    const targetPosition = target.offsetTop - navbarHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
</script>
<!-- ...existing code... -->