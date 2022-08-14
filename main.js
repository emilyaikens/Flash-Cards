let dom = {
    html: document.getElementById("html"),
    css: document.getElementById("css"),
    js: document.getElementById("js"),
    //cardContainer: document.querySelector(".card-container"),
    card: document.querySelector(".card"),
    question: document.querySelector(".question"),
    answer: document.querySelector(".answer"),
    back: document.getElementById("back"),
    answer: document.getElementById("answer"),
    next: document.getElementById("next")
};

let vars = {
    backClicks: 0,
    nextClicks: 0,
    answerClicks: 0,
    htmlCalls: 0,
    cssCalls: 0,
    jsCalls: 0,
    htmlCards: [],
    cssCards: [],
    jsCards: []
};

class flashCard {
    constructor (question, answer, language) {
        this.question = question;
        this.answer = answer;
        this.language = language;
    };
    addCard () {
        if (this.language === "html") {
            vars.htmlCards.push(this);
        } else if (this.language === "css") {
            vars.cssCards.push(this);
        } else if (this.language === "js") {
            vars.jsCards.push(this);
        };
    };
}

let card1 = new flashCard("sample question", "sample answer", "html");
card1.addCard();







//     createCard () {
//         let newCard = document.createElement("div");
//         newCard.setAttribute("class","card");
//         newCard.classList.add("hidden");
//         newCard.id = this.id;
//         dom.cardContainer.appendChild(newCard);

//         let newQuestion = document.createElement("div");
//         newQuestion.setAttribute("class","question");
//         document.getElementById(this.id).appendChild(newQuestion);

//         let newAnswer = document.createElement("div");
//         newAnswer.setAttribute("class","answer");
//         document.getElementById(this.id).appendChild(newAnswer);
//     }