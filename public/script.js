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
const successMsg = document.getElementsByClassName('success-msg')[0];

function getValue(id) {
    return document.getElementById('id').value;
}

// add an event listener
document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // create an object to store values
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value
        };
        // Use AJAX to send the form data to the server
        fetch("/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            // Display and remove success message after 5secs
            successMsg.style.display = 'block'
            setTimeout(() => {
                successMsg.style.display = 'none'
            }, 5000);
        })
        .catch(error => {
            console.error("Error:", error);
            // Handle the error (display an error message, etc.)
        });

        

        // clear form
        form.reset();
        
    });       
});
