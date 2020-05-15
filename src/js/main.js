var carousel = document.getElementById("main");
var change1 = document.getElementById("changed");
var change2 = document.getElementById("changed-two");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var myBG = [
  "url(src/img/beach-bridge-dark-clouds-dawn.jpg)",
  "url(src/img/action-adventure-aerial-aerial-shot-312105.jpg)",
  "url(src/img/beach-water-steps-sand-17727.jpg)",
  "url(src/img/clouds-dawn-nature-ocean-561463.jpg)",
];

var i = 1;
function changeCarousel() {
  carousel.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),${myBG[i]} no-repeat`;
  carousel.style.backgroundAttachment = "fixed";
  carousel.style.backgroundSize = "cover";
  carousel.style.backgroundPosition = "center center";
}

function changeText() {
  change1.style.background = `${myBG[i]} no-repeat`;
  change1.style.webkitBackgroundClip = "text";
  change1.style.webkitTextFillColor = "transparent";
  change1.style.backgroundAttachment = "fixed";
  change1.style.backgroundSize = "cover";
  change1.style.backgroundPosition = "center center";
}
function changeText_two() {
  change2.style.background = `${myBG[i]} no-repeat`;
  change2.style.webkitBackgroundClip = "text";
  change2.style.webkitTextFillColor = "transparent";
  change2.style.backgroundAttachment = "fixed";
  change2.style.backgroundSize = "cover";
  change2.style.backgroundPosition = "center center";
}

next.addEventListener("click", function (e) {
  e.preventDefault();

  changeCarousel();
  changeText_two();
  changeText();

  i = (i + 1) % myBG.length;
});
