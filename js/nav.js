const sections = Array.from(document.querySelectorAll("section"))
const navItems = document.querySelectorAll(".navbar-menu a")
const header = document.querySelector("header")
sections.unshift(header)
//***Lorsque User commence a scroller le bg nav transparent devient vu */
const navbar = document.querySelector(".navbar")
window.onscroll = () => {
  window.scrollY >500 ? (navbar.classList.add("scrolled")) : (navbar.classList.remove("scrolled"))
  
};
// ACTUALISE  LINK ACTIVE LORS DU SCROLL 
window.addEventListener("scroll", ()=>{
    let currentSection = "#home"
    sections.forEach((section)=>{
    
        let sectionTop = section.offsetTop
      
        if(scrollY> sectionTop-250){
          currentSection = section.getAttribute("id")
        
       }
    })
    navItems.forEach((el)=>{
        el.classList.remove("active")
       el.classList.contains(currentSection) ?  el.classList.add("active") : null
    })
})


