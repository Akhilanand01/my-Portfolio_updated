/* ================= toggle icon navbar ================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/* ================= scroll sections active link ================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ================= sticky navbar ================= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ================= remove toggle icon and navbar when click navbar link (scroll) ================= */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* ================= scroll reveal ================= */
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
/* NOTE: Removed .skill-box from here to fix tab conflict */
ScrollReveal().reveal('.home-img, .portfolio-box, .cert-box, .contact-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ================= typed js ================= */
const typed = new Typed('.multiple-text', {
    strings: ['CS Engineering Student', 'AI Enthusiast', 'Web Developer', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ================= Skills Tabs Functionality ================= */
const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.skills-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        // 1. Remove 'active' class from all tabs and content divs
        tabs.forEach(tab => { tab.classList.remove('active'); });
        allContent.forEach(content => { content.classList.remove('active'); });

        // 2. Add 'active' class to the clicked tab
        tab.classList.add('active');
        
        // 3. Find the target content and make it active
        const targetId = tab.getAttribute('data-target');
        const targetContent = document.querySelector(targetId);
        
        if(targetContent) {
            targetContent.classList.add('active');
        }
    });
});