const bodyRef = document.querySelector("body");
const colorSpanRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

changeColorBtnRef.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorSpanRef.textContent = randomColor;
});
