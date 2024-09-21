/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Student","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})
}

window.addEventListener('scroll', scrollActive)

/* ----- DOWNLOAD CV FUNCTION ----- */
// function downloadCV() {
//   const link = document.createElement('a');
//   link.href = 'assets/cv/cv.pdf'; // Path to your CV file
//   link.download = 'HariVardhan_CV.pdf'; // Name for the downloaded filess
//   link.click();
// }

// // Add event listeners to the download buttons
// document.getElementById('downloadCvBtn').addEventListener('click', downloadCV);
// document.getElementById('downloadCvBtn2').addEventListener('click', downloadCV);
// document.getElementById('downloadCvBtn3').addEventListener('click', downloadCV);

document.getElementById('toggle-button1').addEventListener('click', function(event) {
  event.stopPropagation(); // Stop the event from propagating
});

document.getElementById('toggle-button1').addEventListener('change', function() {
  const root = document.documentElement;

  // Check the current value of a CSS variable and toggle accordingly
  if (getComputedStyle(root).getPropertyValue('--body-color').trim() === 'rgb(250, 250, 250)') {
    // Set dark mode colors
    root.style.setProperty('--body-color', 'rgb(30, 30, 30)');
    root.style.setProperty('--text-color-second', 'rgb(200, 200, 200)');
  //  root.style.setProperty('--first-color', 'rgb(80, 50, 200)');
    root.style.setProperty('--first-color', 'rgb(167, 87, 224)');
    root.style.setProperty('--first-color-hover', 'rgb(30, 50, 180)');
    root.style.setProperty('--color-white', 'black');
    root.style.setProperty('--fg', 'none');
    root.style.setProperty('(--text-color-third', 'rgb(167, 87, 224)');
    // Add more properties to change if needed
  } else {
    // Set light mode colors
    root.style.setProperty('--body-color', 'rgb(250, 250, 250)');
    root.style.setProperty('--text-color-second', 'rgb(68, 68, 68)');
   // root.style.setProperty('--first-color', 'rgb(110, 87, 224)');
   root.style.setProperty('--first-color', 'rgb(167, 87, 224)');
    root.style.setProperty('--first-color-hover', 'rgb(40, 91, 212)');
    root.style.setProperty('--color-white', 'white');
    root.style.setProperty('--fg', 'rergba(255, 255, 255, 0.7)');
    // Add more properties to change if needed
  }
});

document.querySelector('.form-button button').addEventListener('click', function() {
  const name = document.querySelector('.form-inputs .input-field:nth-child(1)').value;
  const email = document.querySelector('.form-inputs .input-field:nth-child(2)').value;
  const message = document.querySelector('.text-area textarea').value;

  const subject = `Contact Form Submission from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

  const mailtoLink = `mailto:harivardhan519@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});

// document.getElementById('toggle-button1').addEventListener('change', function() {
//   const root = document.documentElement;

 

//   // Check the current value of a CSS variable and toggle accordingly
//   if (root.style.getPropertyValue('--body-color') === 'rgb(250, 250, 250)') {
//       // Set dark mode colors
//       root.style.setProperty('--body-color', 'rgb(30, 30, 30)');
//       root.style.setProperty('--text-color-second', 'rgb(200, 200, 200)');
//       root.style.setProperty('--first-color', 'rgb(80, 50, 200)');
//       root.style.setProperty('--first-color-hover', 'rgb(30, 50, 180)');
//       root.style.setProperty('--first-color', 'white');
//       root.style.setProperty('--color-white', 'black');
//       root.style.setProperty(
//       '--first-color-hover', 'white');
      
//       // Add more properties to change if needed
//   } else {
//       // Set light mode colors
//       root.style.setProperty('--body-color', 'rgb(250, 250, 250)');
//       root.style.setProperty('--text-color-second', 'rgb(68, 68, 68)');
//       root.style.setProperty('--first-color', 'rgb(110, 87, 224)');
//       root.style.setProperty('--first-color-hover', 'rgb(40, 91, 212)');
//       root.style.setProperty('--color-white', 'white');
//       // Add more properties to change if needed
//   }
// });

// document.getElementById('toggle-button1').addEventListener('click', function() {
//   const root = document.documentElement;

//   // Check the current value of a CSS variable and toggle accordingly
//   if (getComputedStyle(root).getPropertyValue('--body-color').trim() === 'rgb(250, 250, 250)') {
//     // Set dark mode colors
//     root.style.setProperty('--body-color', 'rgb(30, 30, 30)');
//     root.style.setProperty('--text-color-second', 'rgb(200, 200, 200)');
//     root.style.setProperty('--first-color', 'rgb(80, 50, 200)');
//     root.style.setProperty('--first-color-hover', 'rgb(30, 50, 180)');
//     root.style.setProperty('--color-white', 'black');
//     // Add more properties to change if needed
//   } else {
//     // Set light mode colors
//     root.style.setProperty('--body-color', 'rgb(250, 250, 250)');
//     root.style.setProperty('--text-color-second', 'rgb(68, 68, 68)');
//     root.style.setProperty('--first-color', 'rgb(110, 87, 224)');
//     root.style.setProperty('--first-color-hover', 'rgb(40, 91, 212)');
//     root.style.setProperty('--color-white', 'white');
//     // Add more properties to change if needed
//   }
// });
