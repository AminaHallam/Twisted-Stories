import './style.css'

import { gamesteps } from './gameData'
import { GameStep } from './interfaces'


const inputText = document.querySelector<HTMLDivElement>('#inputContainer')!
//let answerInput = document.querySelector<HTMLDivElement>('.answerInput')!
let buttonGauche = document.getElementById("buttonLeft") as HTMLElement 
let buttonDroit = document.getElementById("buttonRight") as HTMLElement 
let input = document.querySelector(".buttonDiv") as HTMLInputElement
let answerInput = document.createElement('input'); 
input.type = "text"; 




// Startar musiken 

/* let myMusic = new Audio("../src/img/dance-club.mp3");
myMusic.volume = 0.1; */


function onLoad(): void {

  renderStep();  
  
}

let gameLevels = gamesteps;  

let currentStep = gamesteps[0]; 



buttonGauche.addEventListener("click", () => { 
  nextStepGame('left'); 
  
  //myMusic.play(); 
       
})
  
buttonDroit.addEventListener("click", () => {
  nextStepGame('right'); 
    
    
    
    if ( currentStep.input?.key ) {

      input?.appendChild(answerInput)
      let inputValue = answerInput.value
      
      console.log(currentStep.input.key)
      console.log(inputValue)

      if ( inputValue ) {
        
        if (inputValue == currentStep.input.key ) {

          inputValue = currentStep.input.key
          inputText.innerText = inputValue +  " stämmer väl " + ", " + currentStep.question.question
          console.log(inputValue)

        } else {

          inputText.innerText = inputValue + " Stämmer inte tyvärr men" +  ", " + currentStep.question.question
          
          console.log(inputValue)
        }

      }
      
      answerInput.classList.remove("answerBox")
      buttonGauche.classList.remove("buttonHidden")

  
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

    console.log(inputValue)


    if ( currentStep.input.input == "AW" && inputValue === "" ) {

      inputText.innerText = currentStep.question.question

    } else if ( (currentStep.input.input === "Bouledag" && inputValue === "AW") ) {
      
      inputText.innerText = inputValue +  " stämmer väl " + ", " + currentStep.question.question

    } else {

      inputText.innerText = inputValue + " Stämmer inte tyvärr men" +  ", " + currentStep.question.question

    } 

    if ( currentStep.emptyBox && inputValue) {
      
      answerInput.value = ""
    }
    


    
    if ( answerInput ) {
      
      answerInput.classList.add("answerBox") 

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

  if ( currentStep.question.startQts ) {
    
    inputText.innerText = currentStep.question.startQts
    //myMusic.pause(); 
    
  }
  
  
}


window.addEventListener('load', onLoad)

