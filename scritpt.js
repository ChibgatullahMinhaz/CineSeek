const clos = document.getElementById('close_btn');
const open= document.getElementById('open_btn');
const menu = document.getElementById('menu_item');
const menu_one= document.getElementById('menu_item1');


open.addEventListener('click', () => {
    open.style.display = 'none';
    clos.style.display = 'inline-block';
    menu.style.display = 'block';
    menu_one.style.display = 'block'
});

clos.addEventListener('click', () => {
    clos.style.display = 'none';
    open.style.display = 'block';
    menu.style.display = 'none';
    menu_one.style.display = 'none';

});