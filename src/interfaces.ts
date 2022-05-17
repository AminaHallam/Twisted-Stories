
export interface GameStep {
    id: number 
    question: string
    img?: string
    buttonChoices: {
        buttonGauche: ButtonInfo | null
        buttonDroit?: ButtonInfo | null 
    }
};

export type ButtonInfo = {
    reponse: string
    path: number
}; 



