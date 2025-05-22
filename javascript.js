const questions = [
  {
    question: "What does HTML stand for?",
    answers: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "JQuery", "CSS"],
    correct: 2
  },
  {
    question: "Which is not a programming language?",
    answers: ["Python", "HTML", "Java"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const resultBox = document.getElementById("result");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  resultBox.style.display = "block";
  scoreEl.textContent = score;
  localStorage.setItem("lastScore", score); // Optional: store score
}

function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  resultBox.style.display = "none";
  document.getElementById("quiz").style.display = "block";
  showQuestion();
}

nextBtn.onclick = () => {
  if (currentQuestion < questions.length) {
    showQuestion();
  }
};

showQuestion();
