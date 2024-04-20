

// Logo animation

const tl = gsap.timeline({defaults:{duration:0.75, ease:"bounce.out"}})

tl.fromTo('#large-circle',{ x:-10,}, { x:150,}, )

tl.fromTo('#medium-circle',{ x:-30,}, { x:150,}, '<' )

tl.fromTo('#small-circle',{ x:-50,}, { x:150,}, '<' )


// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// document.querySelectorAll ("nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))


const divElement1 = document.querySelector('#project1link');
divElement1.addEventListener('click', function() {
  window.location.href = "./project1.html";
});

const divElement2 = document.querySelector('#project2link');
divElement2.addEventListener('click', function() {
  window.location.href = "./project1.html";
});

const divElement3 = document.querySelector('#project3link');
divElement3.addEventListener('click', function() {
  window.location.href = "./project1.html";
});