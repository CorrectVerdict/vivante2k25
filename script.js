// Main JavaScript for enhancing the website experience

document.addEventListener('DOMContentLoaded', function() {
    // Initialize interactive elements
    initNavigation();
    initPortalEffect();
    initCharacterCarousel();
    
    // Add responsive behavior
    handleResponsiveLayout();
    
    // Add loading animation
    simulateLoading();
});

// Initialize navigation interactions
function initNavigation() {
    const navSections = document.querySelectorAll('.nav-section');
    
    navSections.forEach(section => {
        section.addEventListener('click', function() {
            // Toggle active state
            this.classList.toggle('active');
            
            // Simulate content loading
            const sectionId = this.id;
            console.log(`Navigating to section: ${sectionId}`);
            
            // Add subtle animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Add hover effects to navigation items
    const navItems = document.querySelectorAll('.nav-items li');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Create magical portal effect
function initPortalEffect() {
    const portal = document.querySelector('.portal-frame');
    const portalImage = document.querySelector('.portal-image');
    
    if (!portal || !portalImage) return;
    
    // Add subtle animation to portal
    setInterval(() => {
        portal.style.boxShadow = `0 0 ${15 + Math.random() * 15}px var(--portal-glow)`;
    }, 2000);
    
    // Add parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        portalImage.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px) scale(1.1)`;
    });
}

// Initialize character carousel
function initCharacterCarousel() {
    const carousel = document.querySelector('.character-carousel');
    if (!carousel) return;
    
    // Add smooth scrolling
    let isDown = false;
    let startX;
    let scrollLeft;
    
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });
    
    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
}

// Handle responsive layout adjustments
function handleResponsiveLayout() {
    const checkLayout = () => {
        const isMobile = window.innerWidth <= 768;
        const sections = document.querySelectorAll('.media-section');
        
        sections.forEach(section => {
            const desktopView = section.querySelector('.desktop-view');
            const mobileView = section.querySelector('.mobile-view');
            
            if (isMobile) {
                if (desktopView && mobileView) {
                    desktopView.style.order = 2;
                    mobileView.style.order = 1;
                }
            } else {
                if (desktopView && mobileView) {
                    desktopView.style.order = 1;
                    mobileView.style.order = 2;
                }
            }
        });
    };
    
    // Check on load and resize
    checkLayout();
    window.addEventListener('resize', checkLayout);
}

// Simulate content loading
function simulateLoading() {
    const sections = document.querySelectorAll('.media-section');
    
    sections.forEach((section, index) => {
        // Stagger loading animation
        setTimeout(() => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            
            // Fade in
            setTimeout(() => {
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }, 100);
        }, index * 150);
    });
}

// Add theme toggle functionality
function initThemeToggle() {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '🌙';
    toggleBtn.classList.add('theme-toggle');
    toggleBtn.style.position = 'fixed';
    toggleBtn.style.bottom = '20px';
    toggleBtn.style.right = '20px';
    toggleBtn.style.background = 'var(--primary-blue)';
    toggleBtn.style.border = 'none';
    toggleBtn.style.borderRadius = '50%';
    toggleBtn.style.width = '40px';
    toggleBtn.style.height = '40px';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.fontSize = '20px';
    toggleBtn.style.boxShadow = '0 2px 10px var(--shadow-color)';
    
    document.body.appendChild(toggleBtn);
    
    let darkMode = true;
    
    toggleBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        
        if (darkMode) {
            document.documentElement.style.setProperty('--primary-dark', '#0a1620');
            document.documentElement.style.setProperty('--primary-blue', '#172a3a');
            document.documentElement.style.setProperty('--accent-blue', '#1e4163');
            document.documentElement.style.setProperty('--text-light', '#e3e8ec');
            toggleBtn.innerHTML = '🌙';
        } else {
            document.documentElement.style.setProperty('--primary-dark', '#e8f0f5');
            document.documentElement.style.setProperty('--primary-blue', '#bcd4e6');
            document.documentElement.style.setProperty('--accent-blue', '#8fb8d8');
            document.documentElement.style.setProperty('--text-light', '#172a3a');
            toggleBtn.innerHTML = '☀️';
        }
    });
}

// Call theme toggle initialization
setTimeout(initThemeToggle, 1000);