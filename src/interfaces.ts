
export interface GameStep {
    id: number 
    question: qtsType
    input?: inputData
    img?: string
    emptyBox?: boolean
    buttonChoices: {
        buttonGauche?: ButtonInfo 
        buttonDroit: ButtonInfo 
    }

};

export interface ButtonInfo {
    reponse: string
    path: number
}; 

export interface inputData {
    input?: string
    key?: string
}

interface qtsType {
    question: string,
    startQts?: string
}

