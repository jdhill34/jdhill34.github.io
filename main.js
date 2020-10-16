document.addEventListener("scroll", () => {
  var header = document.querySelector(".main-header");
  var up = document.querySelector(".up");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
    up.classList.add("visible");
  } else {
    header.classList.remove("sticky");
    up.classList.remove("visible");
  }
});
