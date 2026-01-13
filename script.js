const questions = [
  "What made you feel calm today?",
  "What is something you are avoiding?",
  "Describe today using one emotion.",
  "What do you need more of right now?",
  "What would you tell your past self?"
];

const drawingPrompts = [
  "Draw your mood as a shape",
  "Draw something you noticed today",
  "Draw a plant that represents you",
  "Draw today’s energy",
  "Draw a safe place"
];

function generate() {
  const q = questions[Math.floor(Math.random() * questions.length)];
  const d = drawingPrompts[Math.floor(Math.random() * drawingPrompts.length)];

  document.getElementById("question").innerText = q;
  document.getElementById("prompt").innerText = "Drawing prompt: " + d;
}

// Generate one on load
generate();
