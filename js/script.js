let parallax = document.querySelector(".parallax");

window.addEventListener("scroll", function() {
  let scrolledHeight = window.pageYOffset;
  let limit = parallax.offsetTop + parallax.offsetHeight;

  if (scrolledHeight <= limit) {
    parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 1.5 + "px"
  } else {
    parallax.style.backgroundPositionY = "0";
  }
});