import './style.css'

import { gamesteps } from './gameData'


const inputText = document.querySelector<HTMLDivElement>('#inputContainer')!
let buttonGauche = document.getElementById("buttonLeft") as HTMLElement 
let buttonDroit = document.getElementById("buttonRight") as HTMLElement 

function onLoad(): void {

  renderStep(); 

}


let gameLevels = gamesteps;  

let currentStep = gamesteps[0]; 

inputText.innerText = currentStep.question

if(buttonDroit && currentStep.buttonChoices.buttonDroit?.reponse) {
  buttonDroit.textContent = currentStep.buttonChoices.buttonDroit?.reponse
}
if(buttonGauche && currentStep.buttonChoices.buttonGauche?.reponse) {
  buttonGauche.textContent = currentStep.buttonChoices.buttonGauche?.reponse
}



buttonGauche.addEventListener("click", () => { 
  nextStepGame('left'); 
  
})

buttonDroit.addEventListener("click", () => {
  nextStepGame('right'); 
  
}) 


function renderStep(): void {
  


}

function nextStepGame(choice: 'left' | 'right') {



  for (let i = 0; i < gameLevels.length; i++) {
    const gameLevel = gameLevels[1];


    inputText.innerText = gameLevel.question  



    if(choice == 'left' && gameLevel.buttonChoices.buttonGauche) {
      if(buttonGauche && gameLevel.buttonChoices.buttonGauche.path) {

        buttonGauche.innerText = gameLevel.buttonChoices.buttonGauche.reponse

  
        console.log("Left Clicked!");
      } 


    } else if(choice == 'right' && gameLevel.buttonChoices.buttonDroit) {
      if (buttonDroit && gameLevel.buttonChoices.buttonDroit.path) {

        buttonDroit.innerText = gameLevel.buttonChoices.buttonDroit.reponse

      console.log("right Clicked!");

      }
    }
    

  }

}




console.log(gamesteps); 

window.addEventListener('load', onLoad)


