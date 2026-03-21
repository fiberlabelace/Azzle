document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // use the viewport
        threshold: 0.1 // trigger as soon as 10% is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Stop watching once it has animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target the correct class
    const hiddenElements = document.querySelectorAll('.transition, .fadeIn, .fadeLeft, .fadeRight');
    hiddenElements.forEach(el => observer.observe(el));
});