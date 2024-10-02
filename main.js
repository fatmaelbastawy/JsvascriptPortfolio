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
    strings : ["Fatma","A Frontend Developer"],
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

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)




document.querySelectorAll('.download-cv').forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault(); 
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1AV33qhaw9WBYi0FVS7MuoI49L3c91pCa';
    link.download = 'My_CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});


document.getElementById('hireMeBtn').addEventListener('click', function() {
  const phoneNumber = '201143750688'; 
  const message = 'Hello, I am interested in hiring your services.'; 
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  
  window.open(whatsappLink, '_blank');
});




document.addEventListener('DOMContentLoaded', function () {
  // تأكد من استبدال YOUR_PUBLIC_KEY بالمفتاح العام الصحيح
  emailjs.init("D-xIB7sPfKaqqmls8");

  document.getElementById('sendButton').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.querySelector('.input-field[name="name"]').value;
    const email = document.querySelector('.input-field[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name.length < 3 || !email.includes('@')) {
      alert("Please make sure the name is at least 3 characters long and the email contains '@'.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_vmyv5j1', 'template_paq5bzi', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         alert("Your message has been sent successfully!");
      }, function(error) {
         console.log('FAILED...', error);
         alert("Failed to send the message. Error details: " + error.text);
      });
  });
});
