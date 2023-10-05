const questions = [
    {
        question: "Q1. What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2
    },
    {
        question: "Q2. What type of gas is absorbed by plants?",
        options: ["Oxygen", "Carbon Dioxide", "Carbon Monoxide", "Ozone"],
        correctAnswer: 0
    },
    {
        question: "Q3. Name the smallest continent?",
        options: ["Asia", "Australia", "Africa", "None of these"],
        correctAnswer: 1
    },
    {
        question:"Q4. What planet is closest to the sun?",
        options:["Mercury", "Earth", "Mars", "Jupiter"],
        correctAnswer: 0
    },
    {
        question:"Q5. Name the planet nearest to the Earth?",
        options: ["Mars", "Jupiter", "Mercury", "Saturn"],
        correctAnswer: 2
    },
    {
        question:"Q6. What is the largest planet in our solar system?",
        options:["Mercury", "Mars", "Earth", "Jupiter"],
        correctAnswer: 3
    },
    {
        question:"Q7. What is the launch date for Chandrayaan 3 mission?",
        options:["july 24, 2023", "July 14, 2023", "July 10, 2023", "July 16, 2023"],
        correctAnswer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");
const scoreCard = document.getElementById('score');
const gif = document.getElementById('gif');



// function increaseScore() {
//     score++;
//     document.getElementById('score').textContent = score;
// function checkAnswer(isCorrect) {
//     if (isCorrect) {
//         score++;
//         document.getElementById('score').textContent = score;
//     }
// }
    // Check if the score is greater than 5
    
// }



function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        const option = document.createElement("div");
        option.textContent = question.options[i];
        option.className = "option";
        option.addEventListener("click", checkAnswer.bind(null, i));
        optionsElement.appendChild(option);
    }
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.correctAnswer) {
        resultElement.textContent = "Correct!";
        score++;
        scoreCard.innerText=score;
    } else {
        resultElement.textContent = "Incorrect!";
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        nextButton.style.display = "block";
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionElement.textContent = `Quiz completed! Your score: ${score} out of ${questions.length}`;
    optionsElement.innerHTML = "";
    resultElement.textContent = "";
    nextButton.style.display = "none";
    if (score > 2) {
        // Display the celebration GIF
        gif.src = 'pngtree-hurrah-png-image_5999715.png';
    }
    else if(score<=2){
        gif.src = 'betterluck.jpg';

    }
}

nextButton.addEventListener("click", () => {
    loadQuestion();
    resultElement.textContent = "";
    nextButton.style.display = "none";
});

// Initial load
loadQuestion();
