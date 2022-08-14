let dom = {
    html: document.getElementById("html"),
    css: document.getElementById("css"),
    js: document.getElementById("js"),
    cardContainer: document.querySelector(".card-container"),
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
    jsCalls: 0
};

class flashCard {
    constructor (question, answer, language) {
        this.question = question;
        this.answer = answer;
        this.language = language
        this.id = 0
    };
    giveId () {
        if (this.language === "html") {
            vars.htmlCalls++;
            this.id = 100 + vars.htmlCalls;
        } else if (this.language === "css") {
            vars.cssCalls++;
            this.id = 200 + vars.cssCalls;
        } else if (this.language === "js") {
            vars.jsCalls++;
            this.id = 300 + vars.jsCalls;
        };
    };
    createCard () {
        let newCard = document.createElement("div");
        newCard.setAttribute("class","card");
        newCard.classList.add("hidden");
        newCard.id = this.id;
        dom.cardContainer.appendChild(newCard);

        let newQuestion = document.createElement("div");
        newQuestion.setAttribute("class","question");
        document.getElementById(this.id).appendChild(newQuestion);

        let newAnswer = document.createElement("div");
        newAnswer.setAttribute("class","answer");
        document.getElementById(this.id).appendChild(newAnswer);
    }
}

let card1 = new flashCard("this is a test question", "this is a test answer", "html");
card1.giveId();
card1.createCard();

let card2 = new flashCard("second question", "second answer");
card2.giveId();
card2.createCard();