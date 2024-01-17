const buttonMode = document.querySelector(".btn-mode")
const body =document.querySelector("body")
const buttons = document.querySelectorAll(".btn-blue", ".btn-purple")
let mode = localStorage.getItem("theme")

// On change l'icone
// On change la couleur des btns 
// On met la classe dark Mode sur body
const darkMode =()=>{
    body.className = 'dark-mode';
    buttonMode.innerHTML = "<img src='/ressources/sun.svg'></img>"
    localStorage.setItem('theme', 'dark');
    buttons.forEach(button=>{
            if (button.classList.contains("btn-blue")){
                    button.classList.remove("btn-blue")
                    button.classList.add("btn-purple")
            }
    })
}

if(localStorage.getItem('theme') === 'dark'){
    darkMode();
}

buttonMode.addEventListener('click', () => {
    
    if(body.classList.contains('dark-mode')){
        body.className = '';
        buttonMode.innerHTML = "<img src='/ressources/moon.svg'></img>"
        localStorage.setItem('theme', 'clair');
        buttons.forEach(button=>{
            if (button.classList.contains("btn-purple")){
                    button.classList.remove("btn-purple")
                    button.classList.add("btn-blue")
            }
        })
    }
    else {
        darkMode();
    }
});


