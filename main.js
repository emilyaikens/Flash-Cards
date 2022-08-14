let dom = {
    html: document.getElementById("html"),
    css: document.getElementById("css"),
    js: document.getElementById("js"),
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
    };
    giveId() {
        if (this.language === "html") {
            vars.htmlCalls++;
            let cardId = 100 + vars.htmlCalls;
        } else if (this.language === "css") {
            vars.cssCalls++;
            cardId = 200 + vars.cssCalls;
        } else if (this.language === "js") {
            vars.jsCalls++;
            cardId = 300 + vars.jsCalls;
        };
    };


}