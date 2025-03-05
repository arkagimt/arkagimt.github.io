// Number of floating digits to generate
const NUM_DIGITS = 25;
const digitsContainer = document.getElementById("digits-container");

// You can replace these with any code snippets, numbers, or symbols
const digitsOrCode = [
  "0", "1",
  "SQL", "ETL", "AI", "9", "BI",
  "42", "DBT", "ADF", "Azure", "∑", "π", "∞",
  "256", "4096", "137", "108", "27", "432000", "1.618", "3.1416", "e", "7", "12"
];

// Generate digits
for (let i = 0; i < NUM_DIGITS; i++) {
  const span = document.createElement("span");
  span.classList.add("floating-digit");
  
  // Randomly pick a digit or snippet
  span.textContent = digitsOrCode[Math.floor(Math.random() * digitsOrCode.length)];

  // Random position within container
  const xPos = Math.random() * 100; // 0 to 100%
  const yPos = Math.random() * 100; // 0 to 100%
  span.style.left = xPos + "%";
  span.style.top = yPos + "%";
  
  // Random animation duration and delay for variety
  const duration = 6 + Math.random() * 5; // 6 to 11 seconds
  const delay = Math.random() * 3;       // 0 to 3 seconds
  span.style.animationDuration = `${duration}s`;
  span.style.animationDelay = `${delay}s`;
  
  digitsContainer.appendChild(span);
}
