let btnMenu = document.getElementById('abrir')
let menu = document.getElementById('menuMobile')

btnMenu.addEventListener('click',()=>{menu.classList.add('aberto')})
menu.addEventListener('click',()=>{menu.classList.remove('aberto')})