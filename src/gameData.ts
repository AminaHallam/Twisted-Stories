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
        question: "Är du inte sugen på AW snart? Svara på denna kluriga fråga så får vi se vart det leder. Vad står PDO för?", 
        img: "../src/img/aw-bild1.png",
        buttonChoices: {
            buttonGauche: { reponse: "Prata, Dansa, Oändligt", path: 6},
            buttonDroit: { reponse: "PHP Data Objects", path: 4}
        }
    },{
        id: 4,
        question: "Ingen direkt AW-spirit där inte, men okej. Vad skulle du göra på den här fråga?", 
        img: "../src/img/sql-query.png", 
        buttonChoices: {
            buttonGauche: { reponse: "SELECT Table - Det räcker med ett bord", path: 5},
            buttonDroit: { reponse: "FULL JOIN - Alla bord ska med", path: 6}
        }
    }, {
        id: 5,
        question: "Jamen vi kan väl grupperas vid ett bord också! HAVING a drink?", 
        buttonChoices: {
            buttonGauche: { reponse: "JAA!", path: 6},
            buttonDroit: { reponse: "Nej, en annan dag", path: 8}
        }
    }, {
        id: 6,
        question: "Du är definitivt sugen på en AW snart, vem ska planera det?", 
        img: "../src/img/martin.jpg",
        buttonChoices: {
            buttonGauche: { reponse: "Lisas Event AB", path: 8},
            buttonDroit: { reponse: "Martins Event AB", path: 7}
        }
    }, {
        id: 7,
        question: "Martin har inte vaknat än, Du får en annan fråga här, Vad betyder förkortning www?", 
        buttonChoices: {
            buttonGauche: { reponse: "World Wide Web", path: 8},
            buttonDroit: { reponse: "Worlds wildest (w)Party", path: 6}
        }
    },{
        id: 8,
        question: "Har du någon gång funderat på det?", 
        img: "../src/img/programming.png", 
        buttonChoices: {
            buttonGauche: { reponse: "Welcome to the club! Fråga bara Lisa", path: 11},
            buttonDroit: { reponse: "Kanske kan fråga Martin!", path: 7}
        },
    },{
        id: 11,
        question: "Vad hade Lisa svarat?", 
        img: "../src/img/afterwork.png", 
        buttonChoices: {
            buttonGauche: { reponse: "AAAAAAWWWWWWW!!!!", path: 9},
            buttonDroit: { reponse: "AAAAAAWWWWWWWW!!!!", path: 9}
        },
    },{
        id: 9,
        question: "Vad är det för dag idag?", 
        buttonChoices: {
            buttonGauche: { reponse: "Bouledag", path: 10},
            buttonDroit: { reponse: "Partydag", path: 10}
        }
    },{
        id: 10,
        question: "Grymt! Lisa kommer att planera en AW snart igen. Vill du köra om Quizen?", 
        img: "../src/img/boule-img.png", 
        buttonChoices: {
            buttonGauche: { reponse: "JAA!", path: 1},
            buttonDroit: { reponse: "Nej, jag vill ut på en AW", path: 6}
        }
    }


]
  