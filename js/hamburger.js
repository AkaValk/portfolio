//*Lorsque Menu Hamburger est cliqué  */
const menu = document.querySelector(".navbar-menu")
const toggler = document.querySelector(".btn-toggler")
const links = document.querySelectorAll(".navbar-menu a")
console.log(links)
const handleClick = () =>{
    menu.classList.toggle("open")
    toggler.classList.toggle("is-active")
    
}
window.addEventListener("resize",()=>{
    if(window.innerWidth>960){
      menu.classList.remove("open")
    }
})
toggler.addEventListener("click", handleClick)

links.forEach(link => {
  link.addEventListener("click", ()=> menu.classList.remove("open"))
  
});



