//------------------------------Question & Answer Object------------------------------------
const cards = {
    science: [
        { question: "What is the first planet?", answer: "Mercury" },
        { question: "What is a computer?", answer: "An electornic device that allows the transmission and retrieval of information" },
        { question: "What is a cell?", answer: "The basic building block of life" }
    ],
    math: [
        { question: "625/25", answer: "25" },
        { question: "13•13", answer: "169" },
        { question: "5+5", answer: "10" }
    ],
    history: [
        { question: "When did the Japanese bomb Pearl Harbor? (Date & Time)", answer: "December 7, 1941, 7:00" },
        { question: "Who was the first president of the U.S?", answer: "George Washington" },
        { question: "What were the group of students who helped Mao during thr Cultural Revolution called?", answer: "Red Guard" }
    ],
    spanishvocab: [
        { question: "Mochila", answer: "Backpack" },
        { question: "Maestro/a", answer: "Teacher" },
        { question: "Nuestro/a", answer: "Our" }
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
function flip() {
    if (!category) {
        return;
    }

    card.classList.toggle("flipped");
    isFlipped = !isFlipped;
    if (isFlipped) {
        cardFront.style.display = "none";
        cardBack.style.display = "block";
    } else {
        cardFront.style.display = "block";
        cardBack.style.display = "none";
    }
}

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

card.addEventListener("click", flip);
document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        e.preventDefault();
        flip();
    }
});


//let name =prompt("What isyourname?")