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
const slideFromRight = document.querySelectorAll('.sld-right');
const slideFromLeft = document.querySelectorAll('.sld-left');
const slideFromBottom = document.querySelectorAll('.sld-btm');


hiddenElements.forEach((el) =>  observer.observe(el));
slideFromLeft.forEach((el) => observer.observe(el));
slideFromRight.forEach((el) =>  observer.observe(el));
slideFromBottom.forEach((el) =>  observer.observe(el));