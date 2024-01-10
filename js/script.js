// toggle icon navbar


// scrol sections
window.onscroll = () => {
    // sticky header 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}