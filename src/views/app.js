const hamburguer = document.querySelector( ".hamburguer");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelector("nav-links li");

hamburguer.addEventListener('click',() =>{
    navlinks.classList.toggle("open")
    
});