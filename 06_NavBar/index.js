const darkPress = document.querySelector("button");
const wholePage = document.querySelector("body");
const navPage = document.querySelector("nav");

//dark mode switch

darkPress.addEventListener("click", () => {
  wholePage.classList.toggle("darkmode");
  navPage.classList.toggle("navLight");
});
