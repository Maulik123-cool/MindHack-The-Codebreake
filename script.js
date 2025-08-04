let currentLevel = 0;
const levels = [
  {
    prompt: "Level 1: Find the odd one out: 🧠🧠🧠💥🧠🧠",
    answer: "💥"
  },
  {
    prompt: "Level 2: Decode this binary to letter: 01000001",
    answer: "A"
  },
  {
    prompt: "Level 3: What comes next? 2, 4, 8, 16, ?",
    answer: "32"
  },
  {
    prompt: "Level 4: Which boolean is TRUE?\nA) true && false\nB) true || false\nC) !true",
    answer: "B"
  },
  {
    prompt: "Level 5: Final Firewall - What is '5 + 3 * 2' in JavaScript?",
    answer: "11"
  }
];

function nextLevel() {
  const container = document.getElementById("level-container");
  const button = document.getElementById("next-btn");

  if (currentLevel < levels.length) {
    const level = levels[currentLevel];
    container.innerHTML = `
      <p>${level.prompt}</p>
      <input type="text" id="userAnswer" placeholder="Enter your answer..." />
    `;
    button.textContent = "Submit";
    button.onclick = checkAnswer;
  } else {
    container.innerHTML = `<p>🎉 You've hacked the system! Congrats, Codebreaker.</p>`;
    button.style.display = "none";
  }
}

function checkAnswer() {
  const input = document.getElementById("userAnswer");
  const userAnswer = input.value.trim();
  const correctAnswer = levels[currentLevel].answer;

  if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
    currentLevel++;
    nextLevel();
  } else {
    alert("❌ Wrong answer! Try again.");
  }
}
