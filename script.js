// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Project Details Functionality
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');
    const projectDetails = document.querySelector('.project-details');
    const closeDetailButtons = document.querySelectorAll('.close-detail');
    
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const detailContent = document.getElementById(`${projectId}-details`);
            
            // Hide all detail contents
            document.querySelectorAll('.project-detail-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // Show the selected detail content
            detailContent.style.display = 'block';
            
            // Show the project details overlay
            projectDetails.classList.add('active');
            
            // Prevent body scrolling
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeDetailButtons.forEach(button => {
        button.addEventListener('click', function() {
            projectDetails.classList.remove('active');
            
            // Restore body scrolling
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close project details when clicking outside the content
    projectDetails.addEventListener('click', function(e) {
        if (e.target === projectDetails) {
            projectDetails.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Scroll Animation
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkScroll = () => {
        animateOnScrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animated');
            }
        });
    };
    
    // Check scroll position on load and scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
    
    // Service Card Hover Effects
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Initialize animations on load
    checkScroll();
});