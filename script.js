var button = document.querySelector('.topbar__hamburger');
var navbar = document.querySelector('.topbar__nav');
function changeMenu(){
    navbar.classList.toggle('topbar__nav--closed');
}

button.addEventListener('click',changeMenu);