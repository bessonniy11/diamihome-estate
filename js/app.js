let menu = document.querySelector('.menu__list-item');
let subMenu = document.querySelector('.sub-menu');

menu.addEventListener('mouseenter', showSub, false);
menu.addEventListener('mouseleave', hideSub, false);
function showSub() {
    subMenu.classList.add('active');
}
function hideSub() {
    subMenu.classList.remove('active');
}