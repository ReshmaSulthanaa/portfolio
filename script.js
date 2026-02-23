
const roles = ["Full Stack Developer", "AIML Developer", "Problem Solver"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect() {
    current = roles[i];

    if (!isDeleting) {
        document.querySelector(".typing").textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        document.querySelector(".typing").textContent = current.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }
    setTimeout(typeEffect, 100);
}
typeEffect();


const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });

});
