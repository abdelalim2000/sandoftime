var imageSlider = document.getElementsByClassName("slide");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

function reset() {
  for (var i = 0; i < imageSlider.length; i++) {
    imageSlider[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  imageSlider[0].style.display = "block";
}

function prevImage() {
  reset();
  imageSlider[current - 1].style.display = "block";
  current--;
}

prev.addEventListener("click", function (e) {
  e.preventDefault();
  if (current === 0) {
    current = imageSlider.length;
  }
  prevImage();
});

function nextImage() {
  reset();
  imageSlider[current + 1].style.display = "block";
  current++;
}

next.addEventListener("click", function (e) {
  e.preventDefault();
  if (current === imageSlider.length - 1) {
    current = -1;
  }
  nextImage();
});

startSlide();
