const menuBtn = document.getElementById("menu-btn");
const menuBtnImg = document.querySelector("#menu-btn .btn__img");
const headerNav = document.querySelector(".header__nav");

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("menu-is-open");

  if (headerNav.classList.contains("menu-is-open")) {
    menuBtnImg.src = "assets/images/icons/cross.svg";
  } else {
    menuBtnImg.src = "assets/images/icons/burger.svg";
  }
});

window.addEventListener("resize", () => {
  if (
    window.screen.width > 1179 &&
    headerNav.classList.contains("menu-is-open")
  ) {
    headerNav.classList.remove("menu-is-open");
    menuBtnImg.src = "assets/images/icons/burger.svg";
  }
});