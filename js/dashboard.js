const sideMenu = document.querySelector('.side-menu');
const menuBtn = document.querySelector('#menu-bar');
const closeBtn = document.querySelector('#close-btn');


const themeToggler = document.querySelector('.theme-toggler');

// Add event listener to the menu button to toggle the side menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
});
// Add event listener to the close button to hide the side menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
});


themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Add event listener to the window to close the side menu when clicking outside
window.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        sideMenu.style.display = "none";
    }
});