/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink  = document.querySelectorAll('nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
window.addEventListener('scroll', linkAction)

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId =  current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')  
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)



/*===== SHOW SCROLL TOP =====*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)

/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 300
    }
});
/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(L => L.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(L => L.addEventListener('click', activePortfolio))
/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/ 
gsap.fromTo('.home__img', {opacity:0, x:60}, {opacity:1, x:0, duration:2, delay:.5})
gsap.fromTo('.home__data', {opacity:0, y:25}, {opacity:1, y:0, duration:2, delay:.8})
gsap.fromTo('.home__greeting, .home__name, .home__profession, .home__button', {opacity:0, y:25}, {opacity:1, y:0, duration:2, delay:1, ease:'expo.out', stagger:.2})
gsap.fromTo('.nav__logo, .nav__toggle', {opacity:0, y:25}, {opacity:1, y:0, duration:2, delay:1.5, ease:'expo.out', stagger:.2})
gsap.fromTo('.nav__item', {opacity:0, y:25}, {opacity:1, y:0, duration:2, delay:1.8, ease:'expo.out', stagger:.2})
gsap.fromTo('.home__social-icon', {opacity:0, y:25}, {opacity:1, y:0, duration:2, delay:2.3, ease:'expo.out', stagger:.2})


