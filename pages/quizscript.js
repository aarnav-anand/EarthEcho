let questions = [
  {
    question: "What is the main cause of climate change?",
    options: ["Greenhouse gas emissions", "Volcanic eruptions", "Deforestation", "Ocean currents"],
    correctAnswer: "Greenhouse gas emissions",
  },
  {
    question: "Which gas is the primary contributor to global warming?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
    correctAnswer: "Carbon dioxide",
  },
  {
    question: "What is the effect of deforestation on climate change?",
    options: ["It helps reduce carbon emissions", "It accelerates global warming", "It creates more rainfall", "It has no effect"],
    correctAnswer: "It accelerates global warming",
  },
  {
    question: "Which of the following is a consequence of rising global temperatures?",
    options: ["Melting of polar ice caps", "Increase in plant biodiversity", "Decrease in sea levels", "All of the above"],
    correctAnswer: "Melting of polar ice caps",
  },
  {
    question: "What international agreement aims to limit global warming to below 2°C?",
    options: ["The Paris Agreement", "Kyoto Protocol", "Montreal Protocol", "The Green New Deal"],
    correctAnswer: "The Paris Agreement",
  },
  {
    question: "Which sector contributes the most to greenhouse gas emissions?",
    options: ["Transportation", "Agriculture", "Industry", "Energy production"],
    correctAnswer: "Energy production",
  },
  {
    question: "What is the phenomenon that describes the warming of the Earth's surface due to trapped greenhouse gases?",
    options: ["Global cooling", "Global warming", "Greenhouse effect", "El Niño"],
    correctAnswer: "Greenhouse effect",
  },
  {
    question: "What is one of the main effects of melting ice in polar regions?",
    options: ["Increased ocean salinity", "Rising sea levels", "Cooling of the ocean", "More rainfall"],
    correctAnswer: "Rising sea levels",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("questionText").innerText = currentQuestion.question;
  const options = document.querySelectorAll(".options button");
  options.forEach((btn, index) => {
    btn.innerText = currentQuestion.options[index];
    btn.disabled = false;
  });
  document.getElementById("quizResult").innerText = "";
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
    document.getElementById("quizResult").innerText = "Correct! You gained 1 point.";
  } else {
    document.getElementById("quizResult").innerText = "Wrong! No points.";
  }
  const options = document.querySelectorAll(".options button");
  options.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    document.getElementById("quizResult").innerText = `Quiz over! Your score: ${score}/${questions.length}`;
    // Hide the Next Question button after the last question
    document.getElementById("nextButton").style.display = 'none';
  }
}

// Initialize the first question
displayQuestion();
