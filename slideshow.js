var current = 0;
var total = 4; // total number of slides

var slides = document.getElementsByClassName("slide"); // get all slide elements

// Get navigation buttons
var next = document.getElementById("next");
var prev = document.getElementById("previous");

// Initially hide all slides except the first one
for (var i = 1; i < total; i++) {
  slides[i].style.display = "none";
}

// Show the next slide
next.addEventListener("click", function () {
  if (current < total - 1) {
    slides[current].style.display = "none"; // hide the current slide
    current++; // move to the next slide
    slides[current].style.display = "block"; // show the new slide
  }
});

// Show the previous slide
prev.addEventListener("click", function () {
  if (current > 0) {
    slides[current].style.display = "none"; // hide the current slide
    current--; // move to the previous slide
    slides[current].style.display = "block"; // show the new slide
  }
});
