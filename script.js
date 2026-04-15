const cards = [
    {question: "question1", answer: "answer1"},
    {question: "question2", answer: "answer2"},
    {question: "question3", answer: "answer3"}
];

const prevBtn = document.getElementById("prevBtn");
const nxtBtn = document.getElementById("nxtBtn");
const card = document.getElementById("card");
const cardFront = document.getElementById("front");
const cardBack = document.getElementById("back");
let cardIndex = 0;
let isFlipped = false;


cardFront.textContent = cards[cardIndex].question;
cardBack.textContent = cards[cardIndex].answer;

card.addEventListener("click", function() {
    //cardFront.textContent = "";
    //cardBack.textContent = cards[cardIndex].answer;
    //updated ver
    isFlipped = !isFlipped;
    if (isFlipped) {
        cardFront.style.display = "none";
        cardBack.style.display = "block";

    } else {
        cardFront.style.display = "block";
        cardBack.style.display = "none";
    }
})

nxtBtn.addEventListener("click", () => {
    if (cardIndex == cards.length-1) {
        alert("No Questions Available")
    } else {
        cardIndex+=1;
        console.log(cardIndex)
        //cardBack.textContent = "";
        cardFront.textContent = cards[cardIndex].question;
        cardBack.textContent = cards[cardIndex].answer;
    }
})

prevBtn.addEventListener("click", () => {
    if (cardIndex == 0) {
        alert("You Cannot Go Back Past The First Question")
    } else {
        cardIndex-=1;
        //cardBack.textContent = "";
        cardFront.textContent = cards[cardIndex].question;
        cardBack.textContent = cards[cardIndex].answer;
    }
})