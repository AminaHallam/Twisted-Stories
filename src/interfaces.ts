
export interface GameStep {
    id: number, 
    question: string
    buttonChoices: {
        buttonGauche: ButtonInfo | null
        buttonDroit: ButtonInfo | null 
    }
}

export interface ButtonInfo {
    reponse: string
    path: number
}


