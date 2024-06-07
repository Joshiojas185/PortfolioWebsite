// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add sticky navigation bar effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#222';
    } else {
        nav.style.backgroundColor = '#333';
    }
});

// Bounce effect for call-to-action button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.classList.add('animated');
});

ctaButton.addEventListener('mouseout', () => {
    ctaButton.classList.remove('animated');
});

// Interactivity for project cards
document.querySelectorAll('.project-cards .card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('animated');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('animated');
    });
});

// Form submission animation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const button = this.querySelector('button');
    button.textContent = 'Sending...';
    setTimeout(() => {
        button.textContent = 'Send';
        alert('Message sent!');
        this.reset();
    }, 2000);
});
