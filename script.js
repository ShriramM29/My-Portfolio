document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("ibJaZTFonh_pIhAib"); // Replace with actual Public Key
});

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        emailjs.send("service_iacz5sb", "template_7ruep9v", {
            name: name,
            email: email,
            message: message
        })
        .then(response => {
            console.log("Email sent successfully:", response);
            alert("Thanks for your message! I'll get back to you soon.");
            contactForm.reset();
        })
        .catch(error => {
            console.error("Error sending email:", error);
            alert("Oops! Something went wrong. Please try again.");
        });
    });
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add('dark-mode');
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Save preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.toggle('active');
        });
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            
            // Reset hamburger icon
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.classList.remove('active');
            });
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    
    // Add animation to skill bars
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-level');
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-in-out';
                bar.style.width = width;
            }, 200);
        });
    }
    
    // Animate skill bars when they come into view
    const skillsSection = document.getElementById('skills');
    let animated = false;
    
    function checkSkillsVisibility() {
        if (!animated && isInViewport(skillsSection)) {
            animateSkillBars();
            animated = true;
        }
    }
    
    // Initial check for skills visibility
    checkSkillsVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkSkillsVisibility);
    
    // Helper function to check if element is in viewport
    function isInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Add manga-style floating text animation to background
    function createFloatingText() {
        const mangaTexts = ['バン!', 'ドン!', 'ズン!', '!?', '...', 'ワオ!'];
        const body = document.body;
        
        for (let i = 0; i < 10; i++) {
            const textElement = document.createElement('div');
            textElement.classList.add('floating-text');
            textElement.textContent = mangaTexts[Math.floor(Math.random() * mangaTexts.length)];
            
            // Random position and size
            const size = Math.random() * 30 + 10;
            textElement.style.fontSize = `${size}px`;
            textElement.style.left = `${Math.random() * 100}vw`;
            textElement.style.top = `${Math.random() * 100}vh`;
            textElement.style.opacity = '0.1';
            textElement.style.position = 'fixed';
            textElement.style.zIndex = '-1';
            textElement.style.fontFamily = 'Bangers, cursive';
            
            // Random animation duration and delay
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            textElement.style.animation = `float ${duration}s linear ${delay}s infinite`;
            
            body.appendChild(textElement);
        }
    }
    
    // Add floating text animation
    createFloatingText();
    
    // Add keyframe animation for floating text
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0% {
                transform: translate(0, 0) rotate(0deg);
            }
            25% {
                transform: translate(100px, 100px) rotate(5deg);
            }
            50% {
                transform: translate(200px, 0) rotate(0deg);
            }
            75% {
                transform: translate(100px, -100px) rotate(-5deg);
            }
            100% {
                transform: translate(0, 0) rotate(0deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effect to project panels
    const projectPanels = document.querySelectorAll('.project-panel');
    projectPanels.forEach(panel => {
        panel.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        panel.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Carousel functionality
    const carouselTrack = document.getElementById('carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    const indicators = document.getElementById('carousel-indicators');
    
    if (carouselTrack && carouselItems.length > 0) {
        let currentIndex = 0;
        let itemWidth = carouselItems[0].getBoundingClientRect().width;
        let itemsPerView = Math.floor(carouselTrack.parentElement.offsetWidth / itemWidth);
        
        // Create indicators
        for (let i = 0; i < carouselItems.length; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (i === 0) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => {
                goToSlide(i);
            });
            
            indicators.appendChild(indicator);
        }
        
        // Update carousel on window resize
        window.addEventListener('resize', () => {
            itemWidth = carouselItems[0].getBoundingClientRect().width;
            itemsPerView = Math.floor(carouselTrack.parentElement.offsetWidth / itemWidth);
            goToSlide(currentIndex);
        });
        
        // Previous slide
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                goToSlide(currentIndex - 1);
            } else {
                // Loop to the end
                goToSlide(carouselItems.length - 1);
            }
        });
        
        // Next slide
        nextButton.addEventListener('click', () => {
            if (currentIndex < carouselItems.length - itemsPerView) {
                goToSlide(currentIndex + 1);
            } else {
                // Loop to the beginning
                goToSlide(0);
            }
        });
        
        // Go to specific slide
        function goToSlide(index) {
            currentIndex = index;
            
            // Update track position
            carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            
            // Update indicators
            const allIndicators = document.querySelectorAll('.carousel-indicator');
            allIndicators.forEach((ind, i) => {
                if (i === currentIndex) {
                    ind.classList.add('active');
                } else {
                    ind.classList.remove('active');
                }
            });
        }
        
        // Auto-advance carousel
        let autoAdvance = setInterval(() => {
            if (currentIndex < carouselItems.length - itemsPerView) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(0);
            }
        }, 5000);
        
        // Pause auto-advance on hover
        carouselTrack.addEventListener('mouseenter', () => {
            clearInterval(autoAdvance);
        });
        
        // Resume auto-advance when mouse leaves
        carouselTrack.addEventListener('mouseleave', () => {
            autoAdvance = setInterval(() => {
                if (currentIndex < carouselItems.length - itemsPerView) {
                    goToSlide(currentIndex + 1);
                } else {
                    goToSlide(0);
                }
            }, 5000);
        });
        
        // Touch support for carousel
        let touchStartX = 0;
        let touchEndX = 0;
        
        carouselTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carouselTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left - next slide
                if (currentIndex < carouselItems.length - itemsPerView) {
                    goToSlide(currentIndex + 1);
                }
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right - previous slide
                if (currentIndex > 0) {
                    goToSlide(currentIndex - 1);
                }
            }
        }
    }
    
    // Add manga-style animation effects to carousel items
    const carouselCards = document.querySelectorAll('.carousel-card');
    carouselCards.forEach(card => {
        // Add random rotation to cards for manga style
        const rotation = (Math.random() * 4) - 2; // Random rotation between -2 and 2 degrees
        card.style.transform = `rotate(${rotation}deg)`;
    });
});