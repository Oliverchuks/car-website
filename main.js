let search = document.querySelector('.search-box');

document.querySelector('#search-bar').onclick = () => {
    search.classList.toggle('active');
    menu.classList.toggle.remove('active');
}

let menu = document.querySelector('.nav-bar');

document.querySelector('.menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// Header

let navigation = document.querySelector('#navigation');

window.addEventListener('scroll' , () => {
    navigation.classList.toggle('shadow', window.scrollY > 0);
});