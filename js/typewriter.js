const title = document.querySelector(".title")

let typewriter = new Typewriter(title,{
    loop : true,
   
})
typewriter.typeString("Front-End")
.pauseFor(900)
.deleteChars(9)
.typeString("Back-End")
.pauseFor(1500)
.deleteChars(8)
.pauseFor(900)
.typeString("Full-Stack")
.pauseFor(900)
.deleteChars(10)
.pauseFor(1200)
.start()