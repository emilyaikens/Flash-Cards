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
    answerClicks: 0
};

class flashCard {
    constructor (question, answer, id, language) {
        this.question = question;
        this.answer = answer;
        this.id = id;
        this.language = language
    };


}