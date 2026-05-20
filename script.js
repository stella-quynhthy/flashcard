//------------------------------Question & Answer Object------------------------------------
const cards = {
    science: [
        { question: "Squestion1", answer: "Sanswer1" },
        { question: "Squestion2", answer: "Sanswer2" },
        { question: "Squestion3", answer: "Sanswer3" }
    ],
    math: [
        { question: "Mquestion1", answer: "Manswer1" },
        { question: "Mquestion2", answer: "Manswer2" },
        { question: "Mquestion3", answer: "Manswer3" }
    ],
    history: [
        { question: "Hquestion1", answer: "Hanswer1" },
        { question: "Hquestion2", answer: "Hanswer2" },
        { question: "Hquestion3", answer: "Hanswer3" }
    ],
    spanishvocab: [
        { question: "Vquestion1", answer: "Vanswer1" },
        { question: "Vquestion2", answer: "Vanswer2" },
        { question: "Vquestion3", answer: "Vanswer3" }
    ]
};

//---------------------------------HTML Elements--------------------------------------------------
const prevBtn = document.getElementById("prevBtn");
const nxtBtn = document.getElementById("nxtBtn");
const card = document.getElementById("card");
const cardFront = document.getElementById("front");
const cardBack = document.getElementById("back");
let cardIndex = 0;
let isFlipped = false;
let category = "";
let questionLimit = 0;

//--------------------------------Switch Categories-----------------------------------------
function changeCategory(newCategory) {
    if (!cards[newCategory]) {
        return;
    }

    category = newCategory;
    cardIndex = 0;
    questionLimit = cards[category].length - 1;
    isFlipped = false;
    cardFront.style.display = "block";
    cardBack.style.display = "none";

    cardFront.textContent = cards[category][cardIndex].question;
    cardBack.textContent = cards[category][cardIndex].answer;
}

function updateCard() {
    if (!cards[category]) {
        return;
    }

    cardFront.textContent = cards[category][cardIndex].question;
    cardBack.textContent = cards[category][cardIndex].answer;
}

//--------------------------------Flipping Cards & Prev/Nxt-----------------------------------
card.addEventListener("click", function () {
    if (!category) {
        return;
    }

    isFlipped = !isFlipped;
    if (isFlipped) {
        cardFront.style.display = "none";
        cardBack.style.display = "block";
    } else {
        cardFront.style.display = "block";
        cardBack.style.display = "none";
    }
});

function goNext() {
    if (!category) {
        alert("Please select a category first.");
        return;
    }

    if (cardIndex >= questionLimit) {
        alert("No questions available");
        return;
    }

    cardIndex += 1;
    isFlipped = false;
    cardFront.style.display = "block";
    cardBack.style.display = "none";
    updateCard();
}

function goPrev() {
    if (!category) {
        alert("Please select a category first.");
        return;
    }

    if (cardIndex === 0) {
        alert("You cannot go back past the first question.");
        return;
    }

    cardIndex -= 1;
    isFlipped = false;
    cardFront.style.display = "block";
    cardBack.style.display = "none";
    updateCard();
}

nxtBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        goNext();
    } else if (e.key === "ArrowLeft") {
        goPrev();
    }
});
