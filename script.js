// Simple script to check if JS is loaded
console.log("Portfolio website loaded successfully!");
// Scroll Animations setup
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, observerOptions);

    // Track all sections for scroll animation
    const animatedSections = document.querySelectorAll(".section-scroll");
    animatedSections.forEach(section => {
        observer.observe(section);
    });
});
// Jab button par click ho toh PDF open karwane ke liye JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const cvButton = document.getElementById("cvBtn");
    
    if (cvButton) {
        cvButton.addEventListener("click", function(event) {
            console.log("CV Button Clicked Successfully!");
        });
    }
});
<a id="cvBtn" href="Laiba_Tariq_Resume.pdf" target="_blank" class="btn">Download CV</a>
