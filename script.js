// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });
});

// Countdown Timer
function updateCountdown() {
    const festDate = new Date('March 29, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = festDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('days').innerHTML = '0';
        document.getElementById('hours').innerHTML = '0';
        document.getElementById('minutes').innerHTML = '0';
        document.getElementById('seconds').innerHTML = '0';
    }
}

// Add more age effects to the parchment
function addAgeEffects() {
    const parchment = document.querySelector('.parchment');
    for (let i = 0; i < 10; i++) {
        const stain = document.createElement('div');
        stain.classList.add('stain');
        stain.style.width = Math.random() * 100 + 50 + 'px';
        stain.style.height = stain.style.width;
        stain.style.top = Math.random() * 100 + '%';
        stain.style.left = Math.random() * 100 + '%';
        stain.style.opacity = Math.random() * 0.1;
        parchment.appendChild(stain);
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Run functions when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    addAgeEffects();
});