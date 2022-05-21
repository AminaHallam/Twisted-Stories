import './style.css'

import { gamesteps } from './gameData'
import { GameStep } from './interfaces'


const inputText = document.querySelector<HTMLDivElement>('#inputContainer')!
let buttonGauche = document.getElementById("buttonLeft") as HTMLElement 
let buttonDroit = document.getElementById("buttonRight") as HTMLElement 
let input = document.querySelector(".buttonDiv") as HTMLInputElement
let answerInput = document.createElement('input'); 
input.type = "text"; 




// Startar musiken 

let myMusic = new Audio("../src/img/dance-club.mp3");
myMusic.volume = 0.1;


function onLoad(): void {

  renderStep();  
  
}

let gameLevels = gamesteps;  

let currentStep = gamesteps[0]; 



buttonGauche.addEventListener("click", () => { 
  nextStepGame('left'); 
  
  myMusic.play(); 

  if ( currentStep.question.reStartQts ) {
    myMusic.pause(); 
  } 

  if ( currentStep.emptyBox ) {
        
    answerInput.value = ""
  } 
       
})
  
buttonDroit.addEventListener("click", () => {
  nextStepGame('right'); 
    
    
    
    if ( currentStep.input?.key ) {

      input?.appendChild(answerInput)
      let inputValue = answerInput.value
      

      if ( inputValue ) {
        
        if (inputValue == currentStep.input.key ) {

          inputValue = currentStep.input.key
          inputText.innerText = inputValue +  " stämmer väl " + ", " + currentStep.question.question

        } else {

          inputText.innerText = inputValue + " Stämmer tyvärr inte men" +  ", " + currentStep.question.question
          
        }

      }
      
      
      answerInput.classList.remove("answerBox")
      buttonGauche.classList.remove("buttonHidden")
      
      if ( currentStep.emptyBox ) {
        
          answerInput.value = ""
        } 
    } 

  
}) 


function renderStep(): void {

  inputText.innerText = currentStep.question.question
  if(buttonDroit.id && currentStep.buttonChoices.buttonDroit?.reponse) {
    buttonDroit.textContent = currentStep.buttonChoices.buttonDroit?.reponse
  }
  if(buttonGauche.id && currentStep.buttonChoices.buttonGauche?.reponse) {
    buttonGauche.textContent = currentStep.buttonChoices.buttonGauche?.reponse
  }

  if ( currentStep.id == 1 && currentStep.img) {

    let box = document.getElementById("inputContainer"); 

    let otherBox = document.createElement('section'); 
    otherBox.classList.add('otherBox'); 

    box?.appendChild(otherBox)

    let img = document.createElement('img')
    img.classList.add('drinkImg')
    img.src = currentStep.img

    otherBox?.appendChild(img)

  } 


}

function nextStepGame(choice: 'left' | 'right') {

  let foundStep: GameStep

  if(choice == "left") {
    let step = currentStep.buttonChoices.buttonGauche?.path
    foundStep = gameLevels.find(gamesteps => gamesteps.id == step)!
  } else {
    let step = currentStep.buttonChoices.buttonDroit?.path
    foundStep = gameLevels.find(gamesteps => gamesteps.id == step)!
  }
  
  currentStep = foundStep
  renderObject()

}


function renderObject(): void {

  if(currentStep.question) {

    inputText.innerText = currentStep.question.question

  } 

  if(currentStep.buttonChoices.buttonGauche){
    buttonGauche.innerText = currentStep.buttonChoices.buttonGauche.reponse
    
  }
  
  if(!currentStep.buttonChoices.buttonGauche){

    buttonGauche.classList.add("buttonHidden")
    
  } 

  if(currentStep.buttonChoices.buttonDroit){
    buttonDroit.innerText = currentStep.buttonChoices.buttonDroit.reponse
    
  }
  
  
  if ( currentStep.input) {

    if ( !currentStep.input.key ) {

      input?.appendChild(answerInput)
    }
    

    let inputValue = answerInput.value 


    if ( currentStep.input.input == "AW" && inputValue === "" ) {

      inputText.innerText = currentStep.question.question

    } else if ( (currentStep.input.input === "Bouledag" && inputValue === "AW") ) {
      
      inputText.innerText = inputValue +  " stämmer väl " + ", " + currentStep.question.question

    } else {

      inputText.innerText = inputValue + " Stämmer tyvärr inte men" +  ", " + currentStep.question.question

    } 
    
    
    if ( answerInput ) {
      
      answerInput.classList.add("answerBox") 

    } 

    if ( currentStep.emptyBox && inputValue) {
      
      answerInput.value = ""
    } 


  } else if ( answerInput && !currentStep.input ) {

    buttonGauche.classList.remove("buttonHidden")
    
    answerInput.classList.add("answerInput")  
    
    answerInput.classList.remove("answerBox")

  }
   
  
  
  if ( currentStep.id && currentStep.img) {

    let box = document.getElementById("inputContainer"); 

    let img = document.createElement('img')
    img.classList.add('allImg')
    img.src = currentStep.img

    box?.appendChild(img)

  } 

  if ( currentStep.question.reStartQts ) {
    
    inputText.innerText = currentStep.question.reStartQts
    answerInput.value = ""
  }
  
}


window.addEventListener('load', onLoad)

