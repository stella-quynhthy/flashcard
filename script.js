const cards = {science:[
    {question: "Squestion1", answer: "Sanswer1"},
    {question: "Squestion2", answer: "Sanswer2"},
    {question: "Squestion3", answer: "Sanswer3"}], 

    math:[
    {question: "Mquestion1", answer: "Manswer1"},
    {question: "Mquestion2", answer: "Manswer2"},
    {question: "Mquestion3", answer: "Manswer3"}]
}


const prevBtn = document.getElementById("prevBtn");
const nxtBtn = document.getElementById("nxtBtn");
const card = document.getElementById("card");
const cardFront = document.getElementById("front");
const cardBack = document.getElementById("back");
const sciTechBtn = document.getElementById("sciTech");
const mathBtn = document.getElementById("math");
let cardIndex = 0;
let isFlipped = false;
let catergory = "";

function changeCatergory(catergories) {
    if (catergory === "") {
        return;
    }
    document.getElementById.textContent = cards[catergory][cardIndex]
    if (catergories === "science") {
        catergory = "science";
    }



}


cardFront.textContent = cards[catergory][cardIndex].question;
cardBack.textContent = cards[catergory][cardIndex].answer;

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
        cardFront.textContent = cards[catergory][cardIndex].question;
        cardBack.textContent = cards[catergory][cardIndex].answer;
    }
})

prevBtn.addEventListener("click", () => {
    if (cardIndex == 0) {
        alert("You Cannot Go Back Past The First Question")
    } else {
        cardIndex-=1;
        //cardBack.textContent = "";
        cardFront.textContent = cards[catergory][cardIndex].question;
        cardBack.textContent = cards[catergory][cardIndex].answer;
    }
})