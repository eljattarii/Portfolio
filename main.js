document.addEventListener('DOMContentLoaded', () => {

    // --- Dual-Element Glowing Custom Cursor ---
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    if (cursor && cursorDot && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Immediate inner core dot placement
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });
        
        // Mathematical Inertia fluid delay effect for the external glowing circle ring
        const renderCursor = () => {
            let ease = 0.15;
            cursorX += (mouseX - cursorX) * ease;
            cursorY += (mouseY - cursorY) * ease;
            
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            
            requestAnimationFrame(renderCursor);
        };
        renderCursor();
        
        // Add reactive expand states for links/buttons
        const interactiveTargets = document.querySelectorAll('a, button, .filter-btn, .social-icon');
        interactiveTargets.forEach(target => {
            target.addEventListener('mouseenter', () => cursor.classList.add('link-hover'));
            target.addEventListener('mouseleave', () => cursor.classList.remove('link-hover'));
        });
    }


    // --- Advanced 3D Tilt Vector Effect (Parallax Cards) ---
    const tiltCards = document.querySelectorAll('.tilt-target');
    if (window.innerWidth > 768) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate rotation degree matrices based on element centers
                const centerX = rect.width / 2;
                const fillY = rect.height / 2;
                const rotateX = ((y - fillY) / fillY) * -12; // Cap max angles
                const rotateY = ((x - centerX) / centerX) * 12;
                
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    }


    // --- Dynamic Portfolio Categorized Filter Module ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Adjust active button styling matrix
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const activeFilter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (activeFilter === 'all' || cardCategory === activeFilter) {
                    card.classList.remove('hide');
                    // Fast responsive structural recalculation animation trigger
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    card.classList.add('hide');
                }
            });
        });
    });


    // --- Typing Telemetry Animation Interface ---
    const typingElement = document.querySelector('.typing-text');
    const technicalKeywords = ["Python Automation", "PyQt6 Desktop Architectures", "Linux Systems", "Modern Web Interfaces"];
    let keyIdx = 0, charIdx = 0, isDeleting = false, delayTime = 120;

    function handleTypingTelemetry() {
        const currentString = technicalKeywords[keyIdx];
        if (isDeleting) {
            typingElement.textContent = currentString.substring(0, charIdx - 1);
            charIdx--;
            delayTime = 50;
        } else {
            typingElement.textContent = currentString.substring(0, charIdx + 1);
            charIdx++;
            delayTime = 100;
        }

        if (!isDeleting && charIdx === currentString.length) {
            delayTime = 2500; // Hold full statement
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            keyIdx = (keyIdx + 1) % technicalKeywords.length;
            delayTime = 400;
        }
        setTimeout(handleTypingTelemetry, delayTime);
    }
    if (typingElement) handleTypingTelemetry();


    // --- Scroll Trigger Observers & Navbar Control ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const skillBars = document.querySelectorAll('.progress-bar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const executeScrollObserver = () => {
        const triggerMargin = window.innerHeight * 0.85;
        
        // Reveal active sections on viewport intersections
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerMargin) {
                el.classList.add('active');
                
                // Active skill load states inside sections
                if (el.id === 'skills' || el.querySelector('.progress-bar')) {
                    skillBars.forEach(bar => {
                        bar.style.width = bar.getAttribute('data-progress');
                    });
                }
            }
        });

        // Set navbar contextual active track item
        let currentSectionId = '';
        sections.forEach(sec => {
            if (pageYOffset >= (sec.offsetTop - 220)) {
                currentSectionId = sec.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', executeScrollObserver);
    executeScrollObserver(); // Immediate setup calculation


    // --- Responsive Navigation Toggle Matrix ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-xmark');
            });
        });
    }
});
