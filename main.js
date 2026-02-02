// Toggle Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        // Reset hamburger
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Toggle Comparison Matrix
function toggleComparison() {
    const content = document.getElementById('comparison-content');
    const btn = document.getElementById('comparison-toggle-btn');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        btn.textContent = 'Hide Features';
        // Optional: scroll into view slightly if it's off screen? 
        // No, might be jarring.
    } else {
        content.style.display = 'none';
        btn.textContent = 'Compare Features & Details';
    }
}
