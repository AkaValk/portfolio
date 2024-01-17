// Script Form Validation + Send Mail 
const Name = document.querySelector("#name")
const mail = document.querySelector("#mail")
const objet = document.querySelector("#object")
const message = document.querySelector("#message")
const form = document.querySelector("form")
const formMessage = document.querySelector(".form-message")
const loader = document.querySelector(".loader")
//Objet qui stocke le résultat de la validation
const inputsError = {
    name : false,
    mail: false,
    object : false,
    message: false
}

// Fonction qui vérifie si tout les champs sont valides et appel la fonction SendMail() s'ils le sont 
const ValidateForm =() =>{
    const inputs = Object.keys(inputsError)
    // Vérifie si l'objet Validation contient des champs true
    const wrongInputs = inputs.filter(el=> !inputsError[el])
    console.log(wrongInputs)
    // Si Tableau n'est pas vide il y a des erreurs
    if(wrongInputs.length>0) {
        formMessage.style.color = "red"
        formMessage.textContent = "Impossible de traiter le formulaire"}
    // Si Tableau est vide il n'y a pas d'erreur et on peut envoyer le mail         
    else{
        sendEmail()
    
    }
}
// Fonction qui applique la classe error lorsque le champs contient une erreur
const setError = (input, message )=>{
    const formGroup = input.parentElement;
    const errorDisplay = formGroup.querySelector(".error-div")
    errorDisplay.textContent = message;
    formGroup.classList.add("error")
    formGroup.classList.remove("success")
}
const setSucces = (input ) =>{
    const formGroup = input.parentElement;
    const errorDisplay = formGroup.querySelector(".error-div")
    errorDisplay.textContent = "";
    formGroup.classList.remove("error")
} 

const validateMail = input=>{
    // Regex Mail 
    const regMail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
    // On vérifie si le champ de l'email est rempli 
    if(input.value==""){
        setError(input ,"Veuillez rentrer une adresse Mail")    
    }    
    // Si le champs est rempli on test s'il est valide
    else if(!regMail.test(input.value)){
            setError(input,"Mail Invalide. Ex : john.doe@mail.com")
    }
    else{
            setSucces(input)
            inputsError[input.name] = true
    }
}
    
const validateText = (input)=>{
    //Regex Texte
    const regText = /^[a-zA-Z0-9\s.,;:!?'"()éèàôêûîç@]+$/
    //Si Input est vide
      if(input.value==""){
        setError(input ,"Veuillez rentrer votre nom")
      }
      // Si Input est rempli on test s'il contient des caractères invalides
      else if(!regText.test(input.value)){
        setError(input, `Ce champ ne contient que des lettres, des chiffres et de la ponctuation`)
      }
      // Si Input est rempli et ne contient pas de caractères non autorisés
      else{
        setSucces(input)
        inputsError[input.name] = true
      }
}
    
// Fonction Envoi Mail
const sendEmail = ()=>{
    loader.style.display ="flex"
    // Clée  Publique 
    emailjs.init('zfqcyHCGsNHr0oovm');
    // Paramètres pour l'envoie du mail 
    let params ={
            from_name : Name.value,
            email_id : mail.value,
            object : objet.value,
            message : message.value
    }
    // Parametres de la fonction = Service Mail où va être envoyé le mail / Template Form / Paramètres Envoi Mail 
    emailjs.send("service_bqtmi3l", "template_an48xag", params)
    
    // Si l'envoi du Mail est réussi 
    .then((res)=>{
        loader.style.display = "none"
            formMessage.style.color="green"
            formMessage.textContent= `Envoi du mail réussi`
    })
    // Si l'envoi du mail échoue
    .catch((err)=>{
        loader.style.display = "none"
        formMessage.style.color = "red"
        formMessage.textContent = `Envoi du mail raté. Veuillez réessayer ultérieurement` 
    })
}

// Event Submit 
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    ValidateForm()
    
})

// Event lorsque user focus un input 
mail.addEventListener("input",()=> validateMail(mail))
message.addEventListener("input",()=> validateText(message))
objet.addEventListener("input", ()=>validateText(objet))
Name.addEventListener("input",()=>{
    validateText(Name)
    
} )