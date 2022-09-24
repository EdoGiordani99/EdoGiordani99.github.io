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

// Swipers
const swiper = new Swiper(".swiper", {
    // How many slides to show
    slidesPerView: 1,
    // How much space between slides
    spaceBetween: 20,
    // Make the next and previous buttons work
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    // Make the pagination indicators work
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints:{
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4
        }
    }
});

// Send Email

var emailBtn = document.getElementById('send-email-btn')

emailBtn.addEventListener('click', function(e){
    e.preventDefault()

    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var message = document.getElementById('message')

    console.log('DONE');

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "edo.onspotify@gmail.com",
        Password : "A85E17395E2932F93CF557A267DC0BB8331E",
        To : 'edo.onspotify@gmail.com',
        From : email,
        Subject : "This is the subject",
        Body : message
    }).then((message) => {
        if (message == "OK") return onSuccess();
  }).catch((error) => {
    alert("Error Senting Message")
  });
});

