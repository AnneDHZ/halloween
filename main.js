/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      naveClose = document.getElementById('nav-close')

/* Menu show*/
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
})
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        // when we click on each nav__link, we remove the show-menu class
            navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== ATROPOS JS ===============*/
const myAtropos = Atropos({
  el: '.home__images',
  shadow: false,
  highlight: false,
})

/*=============== ADD SHADOW HEADER ===============*/

