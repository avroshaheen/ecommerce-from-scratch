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

// Desktop
// Select elements
const userIcon = document.getElementById("userIcon");
const accountInfo = document.getElementById("accountInfo");

// Toggle visibility on click
userIcon.addEventListener("click", (e) => {
  e.preventDefault();
  accountInfo.classList.toggle("opacity-100");
  accountInfo.classList.toggle("invisible");
});

// Close the dropdown if the user clicks anywhere outside
document.addEventListener("click", (e) => {
  if (!userIcon.contains(e.target) && !accountInfo.contains(e.target)) {
    accountInfo.classList.add("opacity-0");
    accountInfo.classList.add("invisible");
  }
});


// Mobile
// Select elements
const mobileUserIcon = document.getElementById("mobileUserIcon");
const mobileAccountInfo = document.getElementById("mobileAccountInfo");

// Toggle visibility on click
mobileUserIcon.addEventListener("click", (e) => {
  e.preventDefault();
  mobileAccountInfo.classList.toggle("opacity-100");
  mobileAccountInfo.classList.toggle("invisible");
});

// Close the dropdown if the user clicks anywhere outside
document.addEventListener("click", (e) => {
  if (!mobileUserIcon.contains(e.target) && !mobileAccountInfo.contains(e.target)) {
    mobileAccountInfo.classList.add("opacity-0");
    mobileAccountInfo.classList.add("invisible");
  }
});

/* -------------------------------------------------------------------------- */
/*                                  Carousel                                  */
/* -------------------------------------------------------------------------- */
var swiper = new Swiper(".progress-slide-carousel", {
  loop: true,
  fraction: true,
  autoplay: {
    delay: 1200,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".progress-slide-carousel .swiper-pagination",
    type: "progressbar",
  },
});