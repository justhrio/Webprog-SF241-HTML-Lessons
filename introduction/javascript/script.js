/* javascript/vue-app.js */

const { createApp } = Vue;

createApp({
    data() {
        return {
            // --- TYPING EFFECT DATA ---
            displayText: '',
            words: ["Cyber Security Specialist", "Forensics Analyst", "Faithful Believer"],
            wordIndex: 0,
            isDeleting: false,
            typingSpeed: 100,

            // --- FILTERING LOGIC ---
            currentCategory: 'All',
            categories: ['All', 'Security', 'Development', 'IoT'],

            // --- SERVICES DATA ---
            services: [
                { title: "Cyber Security", desc: "Vulnerability Assessment, Forensics & Network Defense.", icon: "fas fa-shield-alt" },
                { title: "Web Development", desc: "Full-stack apps using Vue, React, and Modern CSS.", icon: "fas fa-code" },
                { title: "Music & Arts", desc: "Creative expression through sound and digital art.", icon: "fas fa-guitar" }
            ],

            // --- SKILLS DATA ---
            skills: {
                "Languages": [
                    { name: "Python", icon: "devicon-python-plain colored" },
                    { name: "Java", icon: "devicon-java-plain colored" },
                    { name: "HTML5", icon: "devicon-html5-plain colored" },
                    { name: "CSS3", icon: "devicon-css3-plain colored" },
                    { name: "JavaScript", icon: "devicon-javascript-plain colored" }
                ],
                "Frameworks": [
                    { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
                    { name: "React", icon: "devicon-react-original colored" },
                    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" }
                ],
                "Databases": [
                    { name: "MySQL", icon: "devicon-mysql-plain colored" }
                ],
                "DevOps / Tools": [
                    { name: "Kali Linux", icon: "devicon-linux-plain" },
                    { name: "Git", icon: "devicon-git-plain colored" },
                    { name: "Wireshark", icon: "fas fa-network-wired" }
                ]
            },

            // --- PORTFOLIO PROJECTS ---
            projects: [
                { 
                    title: "Network Defense", 
                    category: "Security", 
                    tech: "Kali Linux / Wireshark",
                    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000" 
                },
                { 
                    title: "Secure Dashboard", 
                    category: "Development", 
                    tech: "Vue.js / Firebase",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000" 
                },
                { 
                    title: "IoT Traffic Light", 
                    category: "IoT", 
                    tech: "Arduino / C++",
                    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000" 
                }
            ]
        }
    },
    computed: {
        filteredProjects() {
            if (this.currentCategory === 'All') {
                return this.projects;
            }
            return this.projects.filter(project => project.category === this.currentCategory);
        }
    },
    methods: {
        // --- TYPING LOGIC ---
        typeWriter() {
            const currentWord = this.words[this.wordIndex];
            
            if (this.isDeleting) {
                this.displayText = currentWord.substring(0, this.displayText.length - 1);
                this.typingSpeed = 50;
            } else {
                this.displayText = currentWord.substring(0, this.displayText.length + 1);
                this.typingSpeed = 100;
            }

            if (!this.isDeleting && this.displayText === currentWord) {
                this.isDeleting = true;
                this.typingSpeed = 2000;
            } else if (this.isDeleting && this.displayText === '') {
                this.isDeleting = false;
                this.wordIndex = (this.wordIndex + 1) % this.words.length;
                this.typingSpeed = 500;
            }

            setTimeout(() => this.typeWriter(), this.typingSpeed);
        },

        // --- SCROLL ANIMATION LOGIC (ADDED HERE) ---
        observeScroll() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            });

            // Find all elements with the 'hidden' class
            const hiddenElements = document.querySelectorAll(".hidden");
            hiddenElements.forEach((el) => observer.observe(el));
        }
    },
    mounted() {
        // 1. Start Typing
        this.typeWriter();
        
        // 2. Start Scroll Observer (This makes the bottom content appear!)
        // We use setTimeout to ensure Vue has finished rendering the HTML first
        setTimeout(() => {
            this.observeScroll();
        }, 100); 
    }
}).mount('#vue-app');