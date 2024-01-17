const btnProjet = document.querySelector(".btn-projet")
const btnContact = document.querySelector(".btn-contact")
const btnCv = document.querySelector(".btn-cv")

const sectionProjet = document.querySelector("#projets")
const sectionContact = document.querySelector("#contact")

const handleClickBtn = (section)=>{
    console.log("Clicked")
    console.log(section)
    section.scrollIntoView({behavior:"smooth"});
}
btnProjet.addEventListener("click", ()=>handleClickBtn(sectionProjet))
btnContact.addEventListener("click", ()=>handleClickBtn(sectionContact))

btnCv.addEventListener("click",()=>{
    window.open("/ressources/CV.pdf")
})