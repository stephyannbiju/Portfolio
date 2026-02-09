
// Custom Cursor - with trailing effect
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 400, fill: "forwards" });
});

// Kinetic Hero Parallax Effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const titleLines = document.querySelectorAll('.hero-title .line');
    const shapes = document.querySelectorAll('.geo-shape');

    titleLines.forEach((line, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (0.5 - x) * speed;
        const yOffset = (0.5 - y) * speed;
        line.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 40;
        const xOffset = (x - 0.5) * speed; // Reverse direction
        const yOffset = (y - 0.5) * speed;
        shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Text Scramble Effect
const scrambleText = document.querySelector('.scramble-text');
if (scrambleText) {
    const phrases = ["Coding Dreams.", "Designing Chaos.", "Building Future."];
    let currentPhrase = 0;

    // Simple typewriter or scramble replacement could go here
    // For now, let's just cycle opacity for "glitch" feel
    setInterval(() => {
        scrambleText.style.opacity = Math.random() > 0.5 ? 1 : 0.5;
        // Occasionally flip text
        // scrambleText.innerText = phrases[currentPhrase];
        // currentPhrase = (currentPhrase + 1) % phrases.length;
    }, 100);
}


// Scroll Reveal Animation (Enhanced)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.kinetic-title, .about-visual, .project-card, .contact-layout').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px) scale(0.9)";
    el.style.transition = "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)"; // Bouncy effect
    observer.observe(el);
});

// Add class for visible state
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
    }
`;
document.head.appendChild(styleSheet);


// Navigation Logic
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        // Toggle logic needs CSS support, assuming .active is handled in CSS
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'fixed';
        navLinks.style.top = '0';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.height = '100vh';
        navLinks.style.background = '#0d0d11';
        navLinks.style.justifyContent = 'center';
        navLinks.style.alignItems = 'center';
        navLinks.style.zIndex = '999';
    });
}
