/* CLICK ON HAMBURGER */
// when click on hamburger hide hamburger and logo, only show offcanvas
const hamburgerButton = document.getElementById("hamburger-button");
const logo = document.getElementById("logo");
const closeButton = document.getElementById("close-button");
const offcanvas = document.getElementById("offcanvasStart");

hamburgerButton.addEventListener("click", function() {
  hamburgerButton.style.display = 'none';
  logo.style.visibility = 'hidden';
});

closeButton.addEventListener("click", function() {
  hamburgerButton.style.display = 'block';
  logo.style.visibility = 'visible';
});

document.addEventListener("click", function(event) {
  if (!offcanvas.contains(event.target) && !hamburgerButton.contains(event.target)) {
    hamburgerButton.style.display = 'block';
    logo.style.visibility = 'visible';
  }
});

/* VALIDATE EMAIL */
const inputDiv = document.getElementById('input-email');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');
const redIcon= document.getElementById('addon-wrapping');
const btn = document.getElementById('btn-submit');

// click on button
btn.addEventListener('click', () => {
  const email = emailInput.value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pattern.test(email)) {
    message.textContent = "";
    emailInput.value = ""
    inputDiv.style.border = '2px solid transparent';
    inputDiv.style.backgroundColor = "#fff";
    redIcon.style.display = 'none';
    message.style.display = 'none';
  } else {
    message.textContent = "Whoops, make sure it's an emali";
    inputDiv.style.border = '2px solid #fa5757';
    inputDiv.style.backgroundColor = "#fa5757";
    message.style.display = 'block';
    redIcon.style.display = 'block';
  }
});

/* SCROLL IN ANIMATION - IMAGES */
const boxes = document.querySelectorAll('.browser');
const wrapper = document.querySelector('.browsers-wrapper');
window.addEventListener('scroll', checkBoxes);
window.addEventListener('load', checkBoxes);

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

/* CLICK ON OFFCANAS .NAV-LINK */
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-link');
  var scrollPosition = 0;

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      hamburgerButton.style.display = 'block';
      logo.style.visibility = 'visible';

      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);

      scrollPosition = window.scrollY || document.documentElement.scrollTop;

      var offcanvas = document.getElementById('offcanvasStart');
      var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }

      setTimeout(function() {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }, 500);
    });
  });
});
