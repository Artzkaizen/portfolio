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

// grab elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const successMsg = document.getElementById('success-msg');

// add an event listener
document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // create an object to store values
        const saveMessage = {
            name: nameInput.value,
            email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value
        };

        // display success message
        successMsg.classList.remove('')
        successMsg.classList.add('success-msg-on');

        console.log(saveMessage);
    });
});
