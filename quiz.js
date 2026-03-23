


const questions = [
  {
    question: "Who is the malicous hacker?",
    options: ["white hat", "black hat", "grey hat"],
    answer: "black hat"
  },
	{
	question: "Which company developed windows?",
	options: ["Microsoft", "Netscape", "Google"],
	answer: "Microsoft"
	},
    {
    question : "What does 'HTTP' stand for?",
    options: ["Hyper Text Transfer Protocol", "High Text Transport Process", "Hyperlink Transfer Tool"],
    answer: "Hyper Text Transfer Protocol"
  },

];






const quizDiv = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const resultP = document.getElementById("result");

// 3. Render questions
questions.forEach((q, index) => {
  const container = document.createElement("div");
  container.innerHTML = `<p>${q.question}</p>`;

  q.options.forEach(option => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="q${index}" value="${option}"> ${option}`;
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
  });

  quizDiv.appendChild(container);
  quizDiv.appendChild(document.createElement("hr"));
});


function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
 