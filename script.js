var button = document.querySelector('.topbar__hamburger');
var navbar = document.querySelector('.topbar__nav');
var listItens = document.querySelectorAll('.nav__item');
function changeMenu(){
    navbar.classList.toggle('topbar__nav--active');
}
function closeMenu(){
    if(navbar.classList.contains('topbar__nav--active')){
        navbar.classList.toggle('topbar__nav--active');
    }
}
button.addEventListener('click',changeMenu);
listItens.forEach(item=>{
    item.addEventListener('click',closeMenu);
});