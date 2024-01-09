// toggle ico navbar


// scrol sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.getAttribute('');
    });

    if(top >= offset && top < offset + height) {
        // active navbar links
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList
        });
    }
    // sticky header 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}