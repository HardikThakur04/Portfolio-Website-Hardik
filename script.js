// JavaScript for Navigation Highlight and Smooth Scrolling
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.7 };

    // Function to handle active link highlighting
    const handleScroll = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").slice(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleScroll, options);
    sections.forEach((section) => observer.observe(section));

    // Smooth Scrolling for Navigation Links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// JavaScript for Hover Effects and Animations
document.addEventListener("DOMContentLoaded", () => {
    const skillElements = document.querySelectorAll(".skill");
    const projectBoxes = document.querySelectorAll(".project-box");
    const awardBoxes = document.querySelectorAll(".award-box");

    // Add hover effect for skills
    skillElements.forEach((skill) => {
        skill.addEventListener("mouseenter", () => {
            skill.style.transform = "scale(1.1)";
            skill.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
            skill.style.boxShadow = "none";
        });
    });

    // Add hover effect for project boxes
    projectBoxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "translateY(-10px)";
            box.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "translateY(0)";
            box.style.boxShadow = "none";
        });
    });

    // Add hover effect for award boxes
    awardBoxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "scale(1.05)";
            box.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "scale(1)";
            box.style.boxShadow = "none";
        });
    });
});

// JavaScript for Contact Section Copy to Clipboard
document.addEventListener("DOMContentLoaded", () => {
    const emailElement = document.querySelector("#contact p");
    emailElement.addEventListener("click", () => {
        const emailText = emailElement.innerText.split(": ")[1];
        navigator.clipboard.writeText(emailText).then(() => {
            alert("Email address copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy email address.");
        });
    });
});

// JavaScript Debug Message
console.log("Portfolio interactivity loaded successfully!");
