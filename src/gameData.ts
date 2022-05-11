import { GameStep } from "./interfaces"

export let gamesteps: GameStep[] = [
    {
        id: 1,
        question: "Välkommen till After School Quiz, vill du spela?", 
        buttonChoices: {
            buttonGauche: { reponse: "Spela", path: 3},
            buttonDroit: { reponse: "Nej, senare", path: 2}
        }

    }, {
        id: 2,
        question: "Kom igen nu, var inte fegis, spela? ", 
        buttonChoices: {
            buttonGauche: { reponse: "okejdåå", path: 3},
            buttonDroit: { reponse: "Nej, jag VILL inte!", path: 2}
        }
    }, {
        id: 3,
        question: "Okej här kommer en klurig fråga, Vad står PDO för?", 
        buttonChoices: {
            buttonGauche: { reponse: "Prata, Dansa, Oändligt", path: 5},
            buttonDroit: { reponse: "PHP Data Objects", path: 4}
        }
    }, {
        id: 4,
        question: "Rätt svar! grymt, detta måste väl firas snart?", 
        buttonChoices: {
            buttonGauche: { reponse: "JAA!", path: 5},
            buttonDroit: { reponse: "Nej, en annan dag", path: 7}
        }
    }, {
        id: 5,
        question: "Du är definitivt sugen på en AW snart, vem ska planera det?", 
        buttonChoices: {
            buttonGauche: { reponse: "Lisas Event AB", path: 7},
            buttonDroit: { reponse: "Martins Event AB", path: 6}
        }
    }, {
        id: 6,
        question: "Du får en annan fråga här, Vad betyder förkortning www?", 
        buttonChoices: {
            buttonGauche: { reponse: "Why worry, world", path: 4},
            buttonDroit: { reponse: "World wide web", path: 8}
        }
    },{
        id: 7,
        question: "vad är det för dag idag?", 
        buttonChoices: {
            buttonGauche: { reponse: "Fettisdag", path: 3},
            buttonDroit: { reponse: "Partydag", path: 5}
        }
    },{
        id: 8,
        question: "Grymt jobbat! Vill du köra om Quizen?", 
        buttonChoices: {
            buttonGauche: { reponse: "JAAA", path: 3},
            buttonDroit: { reponse: "Nej, jag vill ut på en AW", path: 5}
        }
    }


]
  