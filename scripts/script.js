// Add overlay element to the page on load
document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    overlay.id = 'navOverlay';
    overlay.onclick = closeNav;
    document.body.appendChild(overlay);
});

function toggleNav() {
    var nav = document.getElementById('mainNav');
    var hamburger = document.getElementById('hamburger');
    var overlay = document.getElementById('navOverlay');

    var isOpen = nav.classList.contains('open');

    if (isOpen) {
        closeNav();
    } else {
        nav.classList.add('open');
        hamburger.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeNav() {
    var nav = document.getElementById('mainNav');
    var hamburger = document.getElementById('hamburger');
    var overlay = document.getElementById('navOverlay');

    if (nav) nav.classList.remove('open');
    if (hamburger) hamburger.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Close nav if window is resized above mobile breakpoint
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        closeNav();
    }
});