document.addEventListener("scroll", () => {
  var header = document.querySelector(".main-header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
