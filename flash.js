let flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "2 + 2 = ?", answer: "4" }
];

let currentIndex = 0;
let showingAnswer = false;

function displayCard() {
  const front = document.getElementById("card-front");
  const back = document.getElementById("card-back");
  front.textContent = flashcards[currentIndex].question;
  back.textContent = flashcards[currentIndex].answer;
  front.classList.remove("hidden");
  back.classList.add("hidden");
  showingAnswer = false;
}

function toggleAnswer() {
  const front = document.getElementById("card-front");
  const back = document.getElementById("card-back");
  if (showingAnswer) {
    front.classList.remove("hidden");
    back.classList.add("hidden");
  } else {
    front.classList.add("hidden");
    back.classList.remove("hidden");
  }
  showingAnswer = !showingAnswer;
}

function nextCard() {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex + 1) % flashcards.length;
  displayCard();
}

function prevCard() {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  displayCard();
}

function addCard() {
  const q = document.getElementById("question").value.trim();
  const a = document.getElementById("answer").value.trim();
  if (q && a) {
    flashcards.push({ question: q, answer: a });
    currentIndex = flashcards.length - 1;
    displayCard();
    document.getElementById("question").value = '';
    document.getElementById("answer").value = '';
  }
}

function editCard() {
  const q = document.getElementById("question").value.trim();
  const a = document.getElementById("answer").value.trim();
  if (flashcards.length === 0) return;
  if (q) flashcards[currentIndex].question = q;
  if (a) flashcards[currentIndex].answer = a;
  displayCard();
}

function deleteCard() {
  if (flashcards.length === 0) return;
  flashcards.splice(currentIndex, 1);
  currentIndex = Math.max(0, currentIndex - 1);
  if (flashcards.length === 0) {
    document.getElementById("card-front").textContent = "No flashcards.";
    document.getElementById("card-back").textContent = "";
  } else {
    displayCard();
  }
}

// Initialize
displayCard();
