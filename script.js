// Typing Animation Framework for Hero Subtitle
const phrases = ["Free Software.", "Open Source Tools.", "Linux Scripting.", "Terminal Workflows."];
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

// translate arabice to english
document.getElementById('langToggle').addEventListener('click', () => {
  
    const currentPath = window.location.pathname;

    
    if (currentPath.includes('index_ar.html')) {
        window.location.href = 'index.html';
    } 
   
    else if (currentPath.includes('index.html')) {
        window.location.href = 'index_ar.html';
    } 
   
    else {
        window.location.href = 'index.html';
    }
});

// 
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.querySelector('.nav-menu');

mobileToggle.addEventListener('click', () => {
    // 1. تبديل حالة القائمة
    navMenu.classList.toggle('show');
    
    // 2. تدوير الزر لإضافة لمسة جمالية
    mobileToggle.classList.toggle('rotate');

    // 3. تبديل أيقونة الزر (Bars -> Times)
    const icon = mobileToggle.querySelector('i');
    if (navMenu.classList.contains('show')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});


