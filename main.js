let dom = {
    html: document.getElementById("html"),
    css: document.getElementById("css"),
    js: document.getElementById("js"),
    card: document.querySelector(".card"),
    question: document.getElementById("q-paragraph"),
    answer: document.getElementById("a-paragraph"),
    back: document.getElementById("back"),
    answerButton: document.getElementById("answer-button"),
    next: document.getElementById("next"),
    topic: document.getElementById("topic")
};

let vars = {
    scrollClicks: 0,
    answerClicks: 0,
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
//ALL NEW CARDS GO HERE
//__________________________________________________________________________________________________________________
let card1 = new flashCard("sample question", "sample answer", "html");
card1.addCard();
let card2 = new flashCard("second question", "second answer", "html");
card2.addCard();
//__________________________________________________________________________________________________________________

function answerFunction () {
    dom.answerButton.addEventListener("click", function() {
        dom.card.classList.toggle("flipped");
        vars.answerClicks++;
            if (dom.answerButton.innerHTML === "Answer") {
                dom.answerButton.innerHTML = "Question";
            } else if (dom.answerButton.innerHTML === "Question") {
                dom.answerButton.innerHTML = "Answer";
            };
        });
};
answerFunction();

function nextFunction (cardType) {
    dom.next.addEventListener("click", function() {
        dom.answerButton.innerHTML = "Answer";
        vars.scrollClicks++;
    if (vars.answerClicks %2 === 0) {
        dom.question.innerHTML = cardType[vars.scrollClicks].question;
        dom.answer.innerHTML = cardType[vars.scrollClicks].answer;
        vars.answerClicks = 0;
    } else {
        dom.card.classList.toggle("flipped");
        setTimeout(function (){
            dom.question.innerHTML = cardType[vars.scrollClicks].question;
            dom.answer.innerHTML = cardType[vars.scrollClicks].answer;
            vars.answerClicks = 0;
            },0500);
    }
    });
};

function backFunction (cardType) {
    dom.back.addEventListener("click", function() {
        dom.answerButton.innerHTML = "Answer";
        if (vars.answerClicks %2 === 0) {
            vars.scrollClicks--;
            dom.question.innerHTML = cardType[vars.scrollClicks].question;
            dom.answer.innerHTML = cardType[vars.scrollClicks].answer;
        } else {
            dom.card.classList.toggle("flipped");
            setTimeout(function (){
                vars.scrollClicks--;
                dom.question.innerHTML = cardType[vars.scrollClicks].question;
                dom.answer.innerHTML = cardType[vars.scrollClicks].answer;
                },0500);
        }
        });
};

function callLanguage (language) {
    vars.scrollClicks = 0;
    console.log("if thing is working");
    dom.question.innerHTML = language[0].question;
    dom.answer.innerHTML = language[0].answer;

    nextFunction(language);
    backFunction(language);
};

//HTML BUTTON - loads html card array
dom.html.addEventListener("click", function() {
    dom.topic.innerHTML = "HTML Cards";
    callLanguage(vars.htmlCards);
});

//CSS BUTTON - loads css card array
dom.css.addEventListener("click", function() {
    dom.topic.innerHTML = "CSS Cards";
    callLanguage(vars.cssCards);
});

//JS BUTTON - loads js card array
dom.js.addEventListener("click", function() {
    dom.topic.innerHTML = "JavaScript Cards";
    callLanguage(vars.cssCards);
});
