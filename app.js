// Checks to see if the desired section is in frame then add the style or removes
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>  observer.observe(el));

// hamburger menu toggle listener

const toggleButton = document.getElementsByClassName('toggle-menu')[0];
const navBarLinks = document.getElementsByClassName('list')[0];
const hamburgerMenu = document.getElementsByClassName('toggle')[0];

toggleButton.addEventListener('click', () => {
    console.log("success");
    navBarLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});

// smooth scroll animation
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.scroll-effect a');

    // Add click event listener to each navigation link
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        // Prevent the default behavior of anchor links 
        event.preventDefault();
          
          // Removes 'active' class
          navBarLinks.classList.remove('active');
          hamburgerMenu.classList.remove('active');
          
          // Scroll to the target section using smooth scrolling
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      });
    });
});
// form validation

const form = document.querySelector('form');
const nameInput = document.querySelector('input[name = "name"]');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("sucess now");

})
console.log(nameInput);