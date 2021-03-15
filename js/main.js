const d = document;
const $navMenu = d.getElementById('nav-menu'),
      $toggleMenu = d.getElementById('nav-toggle'),
      $closeMenu = d.getElementById('nav-close')

$toggleMenu.addEventListener('click', ()=>{
    $navMenu.classList.toggle('show')
})

$closeMenu.addEventListener('click', ()=>{
    $navMenu.classList.remove('show')
})

const $navLink = d.querySelectorAll('.nav__link')

function linkAction(){
    //ACTIVO YDESACTIVO EL LINK
    $navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    //QUITO EL MENÚ
    $navMenu.classList.remove('show')
}

$navLink.forEach(n => n.addEventListener('click',linkAction))