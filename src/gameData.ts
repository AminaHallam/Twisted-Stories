import { GameStep } from "./interfaces"


export let gamesteps: GameStep[] = [
    {
        id: 1,
        question: { question: "Välkommen till After School Quiz! 🎉", firstQts: true}, 
        img: "../src/img/drink.png", 
        
        buttonChoices: {
            buttonGauche: { reponse: "Spela", path: 3},
            buttonDroit: { reponse: "Nej, senare", path: 2}
        }

    }, {
        id: 2,
        question: { question: "Kom igen nu, var inte blyg, spela? "}, 
        buttonChoices: {
            buttonGauche: { reponse: "okejdåå", path: 3},
            buttonDroit: { reponse: "Nej, jag VILL inte!", path: 2}
        }
    }, {
        id: 3,
        question: { question: "Är du inte sugen på AW snart? Svara på denna kluriga fråga så får vi se vart det leder. Vad står PDO för?"}, 
        img: "../src/img/aw-bild1.png",
        buttonChoices: {
            buttonGauche: { reponse: "Prata, Dansa, Oändligt", path: 6},
            buttonDroit: { reponse: "PHP Data Objects", path: 4}
        }
    },{
        id: 4,
        question: { question: "Ingen direkt AW-spirit där inte, men okej. Vad skulle du göra på den här fråga?"}, 
        img: "../src/img/sql-query.png", 
        buttonChoices: {
            buttonGauche: { reponse: "SELECT Table - Det räcker med ett bord", path: 5},
            buttonDroit: { reponse: "FULL JOIN - Alla bord ska med", path: 6}
        }
    }, {
        id: 5,
        question: { question: "Jamen vi kan väl grupperas vid ett bord också! HAVING a drink?"}, 
        buttonChoices: {
            buttonGauche: { reponse: "JAA!", path: 6},
            buttonDroit: { reponse: "Nej, en annan dag", path: 8}
        }
    }, {
        id: 6,
        question: { question: "Du är definitivt sugen på en AW snart 🔥 Vem ska planera det?"}, 
        img: "../src/img/martin.jpg",
        buttonChoices: {
            buttonGauche: { reponse: "Lisas Event AB", path: 8},
            buttonDroit: { reponse: "Martins Event AB", path: 7}
        }
    }, {
        id: 7,
        question: { question: "Martin har inte vaknat än, Du får en annan fråga här, Vad betyder förkortning www?"}, 
        buttonChoices: {
            buttonGauche: { reponse: "World Wide Web", path: 8},
            buttonDroit: { reponse: "Worlds wildest (w)Party", path: 6}
        }
    },{
        id: 8,
        question: { question: "Har du någon gång funderat på det?"}, 
        img: "../src/img/programming.png",
        buttonChoices: {
            buttonGauche: { reponse: "Welcome to the club! Fråga bara Lisa", path: 11},
            buttonDroit: { reponse: "Kanske kan fråga Martin!", path: 7}
        },
    },{
        id: 11,
        question: { question: "Vad hade Lisa svarat?"}, 
        img: "../src/img/afterwork.png", 
        buttonAnswer: true,
        buttonChoices: {
            buttonDroit: { reponse: "Click!", path: 9}
        },
    },{
        id: 9,
        question: { question: "Vad är det för dag idag?"},
        emptyBox: true,
        buttonAnswer:true, 
        input: { key: "AW"}, 
        buttonChoices: {
            buttonDroit: { reponse: "Click!", path: 10}
        }
    },{
        id: 10,
        question: { question: "Grymt jobbat! Lisa kommer att planera en AW snart. Vill du köra om Quizen? 🚀 "}, 
        input: { key: "Bouldag"},
        emptyBox: true,
        img: "../src/img/boule-img.png", 
        restart:true,
        buttonChoices: {
            buttonGauche: { reponse: "JAA!"},
            buttonDroit: { reponse: "Nej, jag vill ut på en AW", path: 12}
        }
    },{
        id: 12,
        question: { question: "🔥 Håll utkik efter inbjudan 🔥"}, 
        emptyBox: true,
        img: "../src/img/After-Work-widget.png", 
        restart:true,
        secondChoice:true,
        buttonChoices: {
            buttonDroit: { reponse: "YEES! 🎉 "}
        }
    }



]
  