// Document Ready Check: Ensures DOM is loaded before running scripts (for debugging: console.log if issues arise)
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle: Handles hamburger menu for responsive navigation
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) { // Safety check to prevent errors if elements are missing
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active'); // Toggle 'active' class for CSS slide-in
            // Optional: Toggle hamburger to X (for future enhancement, but kept simple here)
        });
    } else {
        console.warn('Navigation elements not found. Check HTML IDs.'); // Debug log for maintenance
    }

    // Smooth Scrolling for Navigation Links: Improves user experience on anchor clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump
            const targetId = this.getAttribute('href'); // Get target section ID
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) { // Ensure target exists
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Smooth animation
                    block: 'start' // Align to top
                });
                // Close mobile menu after click (if open)
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            } else {
                console.warn('Target section not found: ' + targetId); // Debug log
            }
        });
    });

    // Optional: Close mobile menu on outside click (enhances UX, but basic implementation)
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    console.log('UB Mager website scripts loaded successfully.'); // Confirmation log for debugging
});