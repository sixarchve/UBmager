document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    } else {
        console.warn('Navigation elements not found. Check HTML IDs.');
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) { 
                targetSection.scrollIntoView({
                    behavior: 'smooth', 
                    block: 'start'
                });
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            } else {
                console.warn('Target section not found: ' + targetId);
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    console.log('UB Mager website scripts loaded successfully.');
});