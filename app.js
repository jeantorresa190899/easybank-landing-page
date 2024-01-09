function changeActive(e) {
  document.querySelectorAll(".item-menu").forEach((item) => {
    item.classList.remove("active");
  });
  e.classList.add("active");
}

document.getElementById("check").addEventListener("click", () => {
  if (document.getElementById("check").checked === false) {
    document.getElementById("img-nav").src = "images/icon-close.svg";
  } else {
    document.getElementById("img-nav").src = "images/icon-hamburger.svg";
  }
});
