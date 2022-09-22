const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

const scrollHeader = () => {
    const headerElement = selectElement('#header'); 
    if(this.scrollY >= 15) {
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader)


// Menu
const menuToggleIcon = selectElement('#menu-toggle-icon'); 

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu'); 
    mobileMenu.classList.toggle('activated'); 
    menuToggleIcon.classList.toggle('activated'); 
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Dark Light Mode
function onLoad() {
    if (document.body) return document.body;
}

const bodyElement = onLoad()
const themeToggleBtn = selectElement('#theme-toggle-btn')
const currentTheme = localStorage.getItem('currentTheme')


if (currentTheme){
    bodyElement.classList.add('light-theme')
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');
    if (bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive'); 
    } else{
        localStorage.removeItem('currentTheme');
    }
});

// Search Bar Open / Close
const searchOpenIcon = selectElement('#search-icon')
const searchCloseIcon = selectElement("#form-close-btn")
const searchContainer = selectElement("#search-form-container")

searchOpenIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('activated'); 
});

searchCloseIcon.addEventListener('click', () => {
    searchContainer.classList.remove('activated'); 
});

//Exit search if ESC is pressed
window.addEventListener('keyup', event => {
    if(event.key === 'Escape') searchContainer.classList.remove('activated')
});