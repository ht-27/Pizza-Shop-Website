let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-icon');
let darkmode = document.querySelector('#darkmode');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
}

// Dark Mode
// Check Local Storage
if (localStorage.getItem('theme') == 'dark') {
    document.body.classList.add('active');
    darkmode.classList.replace('bx-moon', 'bx-sun');
}

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
        localStorage.setItem('theme', 'dark');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
        localStorage.setItem('theme', 'light');
    }
}

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: true
});

sr.reveal('.home-text', { origin: 'left' });
sr.reveal('.home-img', { origin: 'right', delay: 200 });
sr.reveal('.heading', { delay: 200 });
sr.reveal('.specs-details .box', { origin: 'left', interval: 200 });
sr.reveal('.specs-img', { delay: 600 });
sr.reveal('.shop-container .box', { interval: 150 });
sr.reveal('.footer', { origin: 'top', delay: 200 });
sr.reveal('.about-img', { origin: 'left' });
sr.reveal('.about-text', { origin: 'right' });
sr.reveal('.menu-container .box', { interval: 200 });
sr.reveal('.services-container .s-box', { interval: 200 });
sr.reveal('.connect-text', { origin: 'left' });
sr.reveal('.newsletter', { origin: 'right' });
sr.reveal('.contact', { delay: 100 });
