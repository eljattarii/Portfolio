
const words = [
'Full Stack Developer',
'Python Programmer',
'AI Enthusiast',
'UI Designer'
];

let i = 0;
let j = 0;
let current = '';
let isDeleting = false;

function type(){

current = words[i];

if(isDeleting){
j--;
}else{
j++;
}

document.querySelector('.typing').textContent = current.substring(0,j);

if(!isDeleting && j === current.length){
isDeleting = true;
setTimeout(type,1200);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i++;
if(i === words.length){
i = 0;
}
}

setTimeout(type,isDeleting ? 50 : 100);

}

type();

ScrollReveal().reveal('.hero-left',{
origin:'left',
distance:'60px',
duration:1200,
delay:200
});

ScrollReveal().reveal('.hero-right',{
origin:'right',
distance:'60px',
duration:1200,
delay:400
});

ScrollReveal().reveal('.section-title,.skill-card,.project-card,.stat,.timeline-item,.contact-card',{
origin:'bottom',
distance:'40px',
duration:1000,
interval:150
});
