// Typing Effect
const words = ["Cyber Security Specialist", "Forensics Analyst", "Faithful Believer"];
let i = 0;
let timer;

function typeWriter() {
    const element = document.querySelector(".typewriter");
    const word = words[i];
    const currentText = element.textContent;
    
    if (!element.classList.contains("deleting")) {
        element.textContent = word.substring(0, currentText.length + 1);
        if (element.textContent === word) {
            element.classList.add("deleting");
            setTimeout(typeWriter, 2000);
        } else {
            setTimeout(typeWriter, 100);
        }
    } else {
        element.textContent = word.substring(0, currentText.length - 1);
        if (element.textContent === "") {
            element.classList.remove("deleting");
            i = (i + 1) % words.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, 50);
        }
    }
}

// Start Typing
document.addEventListener('DOMContentLoaded', typeWriter);

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));