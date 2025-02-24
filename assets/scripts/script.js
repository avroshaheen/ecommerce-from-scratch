// Get references to interactive menu elements
const menuBtn = document.getElementById("menuButton");
const closeBtn = document.getElementById("closeButton");
const mobileMenu = document.getElementById("mobileMenu");
// Show mobile menu when hamburger button is clicked
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});
// Hide mobile menu when close button is clicked
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
