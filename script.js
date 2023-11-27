let timeLeft = 10; // 30秒の制限時間
const timerElement = document.getElementById("timer");
const resultElement = document.getElementById("result");
const paymentLinkElement = document.getElementById("paymentLink");
const correctAnswer = "apple";

const interval = setInterval(() => {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(interval);
    showPaymentLink();
  }
}, 1000);

function submitAnswer() {
  clearInterval(interval);
  const userAnswer = document.getElementById("answer").value;
  if (userAnswer === correctAnswer) {
    resultElement.textContent = "Correct!";
  } else {
    showPaymentLink();
  }
}

function showPaymentLink() {
  resultElement.textContent = "Time's up or wrong answer!";
  paymentLinkElement.style.display = "block";
}
