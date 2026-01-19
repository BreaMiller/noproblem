// ===================================
// NP Services LLC - JavaScript
// Interactive functionality
// ===================================

// Hide loading screen when page is fully loaded
const loadingStartTime = Date.now();
const minimumLoadingTime = 3500; // 3.5 seconds minimum

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        const elapsedTime = Date.now() - loadingStartTime;
        const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);
        
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after transition
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, remainingTime);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    // View Portfolio Coming Soon Popup
    const portfolioBtn = document.getElementById('portfolioBtn');
    if (portfolioBtn) {
        portfolioBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Portfolio gallery coming soon! In the meantime, please contact us to see examples of our work.');
        });
    }
    
    // Dark Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Always start in dark mode
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Save theme preference
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class for styling
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling with Google Apps Script
    const contactForm = document.querySelector('.contact-form form');
    
    // *** REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL ***
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxjwjOgou4XV2oGz0YmYom7HmMr6Q3NSIVjQJ39PrLaCFZmaJ4ForToqlj3-7Yo1CnwPA/exec';
    
    if (contactForm) {
        console.log('Form found, attaching submit handler');
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            // Get the submit button
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            try {
                // Get form data
                const formData = new FormData(contactForm);
                
                // Convert FormData to JSON
                const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    serviceType: formData.get('service-type'),
                    projectDetails: formData.get('project-details')
                };
                
                console.log('Sending data:', data);
                console.log('To URL:', SCRIPT_URL);
                
                // Send to Google Apps Script
                const response = await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Required for Google Apps Script
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                console.log('Request sent successfully');
                
                // With no-cors mode, we can't read the response
                // But if no error is thrown, we assume success
                
                // Show success message
                alert('✅ Thank you for your interest! We will contact you shortly to discuss your project.');
                
                // Reset form
                contactForm.reset();
                
            } catch (error) {
                console.error('Form submission error:', error);
                alert('❌ Sorry, there was an error submitting the form. Please try again or call us directly.');
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    } else {
        console.error('Contact form not found!');
    }
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.process-step, .project-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add lazy loading for images
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // Project card click handler (for future modal or detail view)
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Placeholder for project detail view
            console.log(`Project ${index + 1} clicked`);
            // In a real implementation, you might open a modal or navigate to a detail page
        });
    });
    
    // Add hover effect class for touch devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Hero section improvements (parallax removed for better performance)
    const hero = document.querySelector('.hero');
    
    if (hero) {
        // Reset any inline styles that might have been applied
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = '';
            heroContent.style.opacity = '';
        }
    }
    
    // Service cards entrance animation on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                serviceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        serviceObserver.observe(card);
    });
    
    // Process steps animation
    const processSteps = document.querySelectorAll('.process-step');
    
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 150);
                processObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    processSteps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-30px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        processObserver.observe(step);
    });
    
    // Add current year to footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear && footerYear.textContent.includes('2026')) {
        footerYear.textContent = footerYear.textContent.replace('2026', currentYear);
    }
    
});

// Utility function to debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Track performance for optimization
if ('performance' in window) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}
