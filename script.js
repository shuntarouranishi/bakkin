let timeLeft = 20; // 60秒
const timerElement = document.getElementById("timer");
const paymentLinkElement = document.getElementById("paymentLink");

const interval = setInterval(() => {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(interval);
    paymentLinkElement.style.display = "block"; // PayPayリンクを表示
  }
}, 1000);
