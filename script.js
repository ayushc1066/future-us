const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const reveal = document.getElementById("reveal");
const openFuture = document.getElementById("openFuture");
const letterPage = document.getElementById("letterPage");
const hearts = document.getElementById("hearts");

// Floating hearts in the background
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  heart.style.animationDuration = (7 + Math.random() * 7) + "s";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

setInterval(createHeart, 160);

// Tiny sparkles
function createSparkle() {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = "✧";

  sparkle.style.left = Math.random() * 100 + "%";
  sparkle.style.top = Math.random() * 100 + "%";
  sparkle.style.fontSize = (10 + Math.random() * 12) + "px";
  sparkle.style.animationDelay = Math.random() * 2 + "s";

  hearts.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 4000);
}

setInterval(createSparkle, 1200);

// Open the envelope
envelope.addEventListener("click", () => {
  envelope.classList.add("opened");

  setTimeout(() => {
    intro.classList.add("hidden");
    reveal.classList.remove("hidden");
  }, 1000);
});

// Open the future message
openFuture.addEventListener("click", () => {
  reveal.classList.add("hidden");
  letterPage.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});