const counterButton = document.getElementById("counter");
const resetButton = document.getElementById("reset");
const clicked = document.getElementById("clicks");

// Retrieve the value from localStorage (if available)
const storedClicks = localStorage.getItem("clicked");
let clicks = storedClicks ? parseInt(storedClicks, 10) : 0;

function updateClicks() {
  clicked.innerHTML = clicks;
}

function incrementClicks() {
  clicks += 1;
  localStorage.setItem("clicked", clicks);
  updateClicks();
}

function resetClicks() {
  localStorage.removeItem("clicked"); // Remove the "clicked" key from local storage
  clicks = 0; // Reset the counter variable
  updateClicks(); // Update the displayed value
}

// Attach event listeners
counterButton.addEventListener("click", incrementClicks);
resetButton.addEventListener("click", resetClicks);

// Initialize the displayed value
updateClicks();
