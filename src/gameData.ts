import { GameStep } from "./interfaces"


export let gamesteps: GameStep[] = [
    {
        id: 1,
        question: "Välkommen till After School Quiz!", 
        img: "../src/img/drink.png", 
        buttonChoices: {
            buttonGauche: { reponse: "Spela", path: 3},
            buttonDroit: { reponse: "Nej, senare", path: 2}
        }

    }, {
        id: 2,
        question: "Kom igen nu, var inte blyg, spela? ", 
        buttonChoices: {
            buttonGauche: { reponse: "okejdåå", path: 3},
            buttonDroit: { reponse: "Nej, jag VILL inte!", path: 2}
        }
    }, {
        id: 3,
        question: "Är du inte sugen på AW snart? Okej här kommer en klurig fråga, Vad står PDO för?", 
        img: "../src/img/aw-bild1.png",
        buttonChoices: {
            buttonGauche: { reponse: "Prata, Dansa, Oändligt", path: 5},
            buttonDroit: { reponse: "PHP Data Objects", path: 4}
        }
    }, {
        id: 4,
        question: "Rätt svar! grymt, detta måste väl firas snart?", 
        buttonChoices: {
            buttonGauche: { reponse: "JAA!", path: 5},
            buttonDroit: { reponse: "Nej, en annan dag", path: 3}
        }
    }, {
        id: 5,
        question: "Du är definitivt sugen på en AW snart, vem ska planera det?", 
        img: "../src/img/martin.jpg",
        buttonChoices: {
            buttonGauche: { reponse: "Lisas Event AB", path: 7},
            buttonDroit: { reponse: "Martins Event AB", path: 6}
        }
    }, {
        id: 6,
        question: "Martin har inte vaknat än, Du får en annan fråga här, Vad betyder förkortning www?", 
        buttonChoices: {
            buttonGauche: { reponse: "World Wide Web", path: 4},
            buttonDroit: { reponse: "Worlds wildest (w)Party", path: 5}
        }
    },{
        id: 7,
        question: "Vad är det för dag idag?", 
        buttonChoices: {
            buttonGauche: { reponse: "Bouledag", path: 8},
            buttonDroit: { reponse: "Partydag", path: 8}
        }
    },{
        id: 8,
        question: "Grymt! Då ska Lisa planera en AW snart igen. Vill du köra om Quizen?", 
        img: "../src/img/boule-img.png", 
        buttonChoices: {
            buttonGauche: { reponse: "JAAA", path: 1},
            buttonDroit: { reponse: "Nej, jag vill ut på en AW", path: 5}
        }
    }


]
  