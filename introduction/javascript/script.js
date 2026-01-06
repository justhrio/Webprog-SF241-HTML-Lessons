// 1. Dark Mode Toggle
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

themeIcon.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "light") {
        html.setAttribute("data-theme", "dark");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        html.setAttribute("data-theme", "light");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});

// 2. Typing Effect
const words = ["Cyber Security Enthusiast", "Web Developer", "Musician", "Lifelong Learner"];
let i = 0;
let timer;

function typeWriter() {
    const element = document.querySelector(".typewriter");
    const word = words[i];
    const currentText = element.textContent;
    
    if (!element.classList.contains("deleting")) {
        // Typing
        element.textContent = word.substring(0, currentText.length + 1);
        if (element.textContent === word) {
            element.classList.add("deleting");
            setTimeout(typeWriter, 2000); // Wait before deleting
        } else {
            setTimeout(typeWriter, 100); // Typing speed
        }
    } else {
        // Deleting
        element.textContent = word.substring(0, currentText.length - 1);
        if (element.textContent === "") {
            element.classList.remove("deleting");
            i = (i + 1) % words.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, 50); // Deleting speed
        }
    }
}
typeWriter();

// 3. Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// 4. Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});