let dom = {
    html: document.getElementById("html"),
    css: document.getElementById("css"),
    js: document.getElementById("js"),
    card: document.querySelector(".card"),
    question: document.querySelector(".question"),
    answer: document.querySelector(".answer"),
    back: document.getElementById("back"),
    answerButton: document.getElementById("answer-button"),
    next: document.getElementById("next")
};

let vars = {
    scrollClicks: 0,
    answerClicks: 0,
    htmlCalls: false,
    cssCalls: false,
    jsCalls: false,
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
let card2 = new flashCard("second question", "second answer", "html");
card2.addCard();

dom.html.addEventListener("click", function() {
    vars.htmlCalls = true;
    vars.cssCalls = false;
    vars.jsCalls = false;
});

dom.css.addEventListener("click", function() {
    vars.htmlCalls = false;
    vars.cssCalls = true;
    vars.jsCalls = false;
});

dom.js.addEventListener("click", function() {
    vars.htmlCalls = false;
    vars.cssCalls = false;
    vars.jsCalls = true;
});

dom.question.innerHTML = vars.htmlCards[0].question;
dom.answer.innerHTML = vars.htmlCards[0].answer;

//ANSWER BUTTON
dom.answerButton.addEventListener("click", function() {
    dom.card.classList.toggle("flipped");
    vars.answerClicks++;
        if (dom.answerButton.innerHTML === "Answer") {
            dom.answerButton.innerHTML = "Question";
        } else if (dom.answerButton.innerHTML === "Question") {
            dom.answerButton.innerHTML = "Answer";
        };
});
//NEXT BUTTON
dom.next.addEventListener("click", function() {
        dom.answerButton.innerHTML = "Answer";
        vars.scrollClicks++;
    if (vars.answerClicks %2 === 0) {
        dom.question.innerHTML = vars.htmlCards[vars.scrollClicks].question;
        dom.answer.innerHTML = vars.htmlCards[vars.scrollClicks].answer;
        vars.answerClicks = 0;
    } else {
        dom.card.classList.toggle("flipped");
        setTimeout(function (){
            dom.question.innerHTML = vars.htmlCards[vars.scrollClicks].question;
            dom.answer.innerHTML = vars.htmlCards[vars.scrollClicks].answer;
            vars.answerClicks = 0;
            },0500);
    }
});
//BACK BUTTON
dom.back.addEventListener("click", function() {
    if (dom.answerButton.innerHTML === "Question") {
        dom.answerButton.innerHTML = "Answer";
    };
    if (vars.answerClicks %2 === 0) {
        vars.scrollClicks--;
        dom.question.innerHTML = vars.htmlCards[vars.scrollClicks].question;
        dom.answer.innerHTML = vars.htmlCards[vars.scrollClicks].answer;
    } else {
        dom.card.classList.toggle("flipped");
        setTimeout(function (){
            vars.scrollClicks--;
            dom.question.innerHTML = vars.htmlCards[vars.scrollClicks].question;
            dom.answer.innerHTML = vars.htmlCards[vars.scrollClicks].answer;
            },0500);
    }
});