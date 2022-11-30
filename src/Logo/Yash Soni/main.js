const mobile_nav_btn = document.querySelector('.mobile_navbar_btn');
const header = document.querySelector('.header');
const navlink = document.getElementsByClassName('navbar_link');
const fade_out = document.querySelector('.Social_Right');
const navbar = document.getElementById('navbar');
const homesection = document.querySelector('.Section_Home'); 
const closebtn = document.getElementById('closebtn');
const openbtn = document.getElementById('openbtn');
mobile_nav_btn.addEventListener('click', () => {
    header.classList.toggle('active');
});


const openBtn =()=>{
    openbtn.style.display= 'none';
    closebtn.style.display= 'block';
    navbar.style.width = '50vw';

}
const closeBtn =()=>{
    openbtn.style.display= 'inline-block';
    closebtn.style.display= 'none';
    navbar.style.width = '0';
    
}

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
    fade_out.classList.toggle('fade', window.scrollY > 0);
    // header.classList.toggle('header2');
})

function navBlack(){
    document.getElementById('navbar_link').style.color = 'black';
    document.getElementById('navbar_link1').style.color = 'black';
    document.getElementById('navbar_link2').style.color = 'black';
    document.getElementById('navbar_link3').style.color = 'black';
    document.getElementById('navbar_link4').style.color = 'black';
    document.getElementById('navbar_link5').style.color = 'black';
}
function navWhite(){
    document.getElementById('navbar_link').style.color = 'white';
    document.getElementById('navbar_link1').style.color = 'white';
    document.getElementById('navbar_link2').style.color = 'white';
    document.getElementById('navbar_link3').style.color = 'white';
    document.getElementById('navbar_link4').style.color = 'white';
    document.getElementById('navbar_link5').style.color = 'white';
}
// Sketch Zoom functions
const sectionSketches  = document.getElementById('Sketches');
const sectionContact  = document.getElementById('Contact');
const observer2 = new IntersectionObserver((entries)=>{
    const ent = entries[0];
    console.log(ent);
     ent.isIntersecting === false ? navWhite():navBlack();
 },{
root:null,
rootMargin: "",
threshold:"0",
})
observer2.observe(sectionContact);
observer2.observe(sectionSketches);
// observer2.observe(body);



//slider 
const slides = document.querySelectorAll('.slide');
const nav_link = document.querySelectorAll('.slider_navlink');

let current_slide = 0;



document.getElementById('prev_slide').addEventListener('click',()=>{
    changeSlide(current_slide + 1);
})
document.getElementById('next_slide').addEventListener('click',()=>{
    changeSlide(current_slide - 1);
})


function changeSlide(moveTo){
    if(moveTo>=slides.length){moveTo=0};
    if(moveTo<0){moveTo = slides.length - 1};

    slides[current_slide].classList.toggle('active');
    nav_link[current_slide].classList.toggle('active');
    slides[moveTo].classList.toggle('active');
    nav_link[moveTo].classList.toggle('active');

    current_slide = moveTo ;
}


document.querySelectorAll('.slider_navlink').forEach((bullet,bulletIndex)=>{
    bullet.addEventListener('click',()=>{
        if(changeSlide!==bulletIndex){
            changeSlide(bulletIndex);
        }
    })
})

const autoSlider = ()=>{
    setTimeout(()=>{
        nav_link.forEach((slide,index)=>{
            slides[index];
        })
    },100)
}
console.log(autoSlider());



