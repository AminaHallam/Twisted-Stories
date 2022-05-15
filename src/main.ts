import './style.css'

import { gamesteps } from './gameData'
import { GameStep } from './interfaces'


const inputText = document.querySelector<HTMLDivElement>('#inputContainer')!
let buttonGauche = document.getElementById("buttonLeft") as HTMLElement 
let buttonDroit = document.getElementById("buttonRight") as HTMLElement 

function onLoad(): void {

  renderStep(); 

}

let gameLevels = gamesteps;  

let currentStep = gamesteps[0]; 


buttonGauche.addEventListener("click", (e) => { 
  // Kolla upp knappen, den hålls intryckt efter click 
  e.preventDefault();
  nextStepGame('left'); 
  
})

buttonDroit.addEventListener("click", (e) => {
  // Kolla upp knappen, den hålls intryckt efter click 
  e.preventDefault();
  nextStepGame('right'); 
  
}) 


function renderStep(): void {

  inputText.innerText = currentStep.question
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
    // Hitta leftbuttonpath på currentStep
    let step = currentStep.buttonChoices.buttonGauche?.path
    foundStep = gameLevels.find(gamesteps => gamesteps.id == step)!
  } else {
    // Hitta rightbuttonpath på currentStep
    let step = currentStep.buttonChoices.buttonDroit?.path
    foundStep = gameLevels.find(gamesteps => gamesteps.id == step)!
  }
  
  currentStep = foundStep
  renderObject()

}

function renderObject(): void {
  
  
   if(currentStep.id && currentStep.buttonChoices.buttonGauche?.path) {
      
      inputText.innerText = currentStep.question
      buttonGauche.innerText = currentStep.buttonChoices.buttonGauche!.reponse
      buttonDroit.innerText = currentStep.buttonChoices.buttonDroit!.reponse
      
    } else if (currentStep.id && currentStep.buttonChoices.buttonDroit?.path) {
      
      inputText.innerText = currentStep.question 
      buttonDroit.innerText = currentStep.buttonChoices.buttonDroit!.reponse
      buttonGauche.innerText = currentStep.buttonChoices.buttonGauche!.reponse
      
    } 
    
    if ( currentStep.id && currentStep.img) {

      let box = document.getElementById("inputContainer"); 

      let img = document.createElement('img')
      img.classList.add('allImg')
      img.src = currentStep.img

      box?.appendChild(img)


    }

    if ( currentStep.id == 1 ) {
      
      let box = document.getElementById("inputContainer"); 
      if( box && currentStep.question) {
        
        box.innerText = "Välkommen igen till Quizen, missa inte rätt svar nu!"
      }

    }
    
  
  
  
}


window.addEventListener('load', onLoad)

