const overlayMenu = document.querySelector('.overlay-menu')
const faBars = document.querySelector('.fa-bars')
const faTimes = document.querySelector('.fa-times')
faBars.addEventListener("click", openOverlayMenu)
function openOverlayMenu(){
    overlayMenu.classList.add('open') 
}
faTimes.addEventListener("click", closeOverlayMenu)
function closeOverlayMenu(){
    overlayMenu.classList.remove('open')
}
const fade = document.querySelector('.fade')
document.body.className = 'fade'
document.body.classList.add('fade')
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function(){
        document.body.className = ''
    }, 200)
})
const loader = document.getElementById('preloader')
window.addEventListener('load',  function (){
    loader.style.display = 'none'
})
const header = document.querySelector('.header')

window.addEventListener("scroll", changeBg)
function changeBg(){
    const scrollValue = window.scrollY
    if(scrollValue < 150){
        header.classList.remove('bgcolor')
    } else{
        header.classList.add('bgcolor')
    }
}
