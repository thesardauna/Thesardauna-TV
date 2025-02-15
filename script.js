// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic navbar background
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 32, 221, 0.9)';
    } else {
        navbar.style.backgroundColor = '#0020dd';
    }
});

// Video player controls
const videoPlayer = document.querySelector('.video-player iframe');

// Initialize any video player functionality here
// Example: const player = new YT.Player(videoPlayer, {...});

// Mobile menu toggle (can be added later)
// const menuToggle = document.querySelector('.menu-toggle');
// const navList = document.querySelector('.navbar ul');
