
export interface GameStep {
    id: number 
    question: qtsType
    input?: inputData
    img?: string
    emptyBox?: boolean
    buttonAnswer?: boolean
    restart?:boolean
    buttonChoices: {
        buttonGauche?: ButtonInfo 
        buttonDroit: ButtonInfo 
    }

};

export interface ButtonInfo {
    reponse: string
    path?: number
}; 

export interface inputData {
    key?: string
}

interface qtsType {
    question: string,
    firstQts?: boolean
}

