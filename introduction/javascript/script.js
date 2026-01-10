/* javascript/vue-app.js */

const { createApp } = Vue;

createApp({
    data() {
        return {
            // FILTERING LOGIC
            currentCategory: 'All',
            categories: ['All', 'Security', 'Development', 'IoT'],

            // SERVICES DATA
            services: [
                { title: "Cyber Security", desc: "Vulnerability Assessment, Forensics & Network Defense.", icon: "fas fa-shield-alt" },
                { title: "Web Development", desc: "Full-stack apps using Vue, React, and Modern CSS.", icon: "fas fa-code" },
                { title: "Music & Arts", desc: "Creative expression through sound and digital art.", icon: "fas fa-guitar" }
            ],

            // SKILLS DATA (Matches your screenshot requirements)
            skills: {
                "Languages": [
                    { name: "Python", icon: "devicon-python-plain colored" },
                    { name: "Java", icon: "devicon-java-plain colored" },
                    { name: "HTML5", icon: "devicon-html5-plain colored" },
                    { name: "CSS3", icon: "devicon-css3-plain colored" },
                    { name: "JavaScript", icon: "devicon-javascript-plain colored" }
                ],
                "Frameworks": [
                    { name: "Vue.js", icon: "devicon-vuejs-plain colored" }, // Suggesting Vue since we are using it!
                    { name: "React", icon: "devicon-react-original colored" },
                    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" }
                ],
                "Databases": [
                    { name: "MySQL", icon: "devicon-mysql-plain colored" },
                    // Placeholder for "Dolphin" icon if MySQL isn't enough
                ],
                "DevOps / Tools": [
                    { name: "Kali Linux", icon: "devicon-linux-plain" }, // Kali specific icon or generic linux
                    { name: "Git", icon: "devicon-git-plain colored" },
                    { name: "Wireshark", icon: "fas fa-network-wired" } // Using FontAwesome for tools without devicons
                ]
            },

            // PORTFOLIO PROJECTS
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
        // This is the logic that filters the projects automatically
        filteredProjects() {
            if (this.currentCategory === 'All') {
                return this.projects;
            }
            return this.projects.filter(project => project.category === this.currentCategory);
        }
    }
}).mount('#vue-app');