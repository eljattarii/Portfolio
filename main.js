// Typing Animation Framework for Hero Subtitle
const phrases = ["Autonomous Workflows.", "Secure Systems.", "Premium UI Layouts.", "Intelligent Code."];
let index = 0;
let charIndex = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function typeAnimation() {
    isEnd = false;
    const targetElement = document.querySelector('.typing-text');
    if (!targetElement) return;

    if (index === phrases.length) {
        index = 0;
    }

    if (charIndex < phrases[index].length && !isDeleting) {
        currentPhrase.push(phrases[index][charIndex]);
        charIndex++;
        targetElement.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && charIndex <= phrases[index].length) {
        currentPhrase.pop(phrases[index][charIndex]);
        charIndex--;
        targetElement.innerHTML = currentPhrase.join('');
    }

    if (charIndex == phrases[index].length) {
        isEnd = true;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        currentPhrase = [];
        isDeleting = false;
        index++;
    }

    const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
    setTimeout(typeAnimation, speed);
}

// Simple Active Link Highlighting on Scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(sect => {
        let top = window.scrollY;
        let offset = sect.offsetTop - 150;
        let height = sect.offsetHeight;
        let id = sect.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Trigger setup on DOM load
document.addEventListener("DOMContentLoaded", () => {
    typeAnimation();
});
