const text = [
    "Full Stack Developer",
    "Python Programmer",
    "AI Enthusiast",
    "Web Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1200);
    }else{
        setTimeout(type, 100);
    }

})();

ScrollReveal().reveal('.hero-text',{
    delay:200,
    distance:'50px',
    origin:'left',
    duration:1000
});

ScrollReveal().reveal('.hero-image',{
    delay:400,
    distance:'50px',
    origin:'right',
    duration:1000
});

ScrollReveal().reveal('.about-card, .skill-card, .project-card, .contact-box',{
    interval:200,
    distance:'40px',
    origin:'bottom',
    duration:1000
});
