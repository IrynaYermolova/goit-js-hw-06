

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  const inputValue = textInput.value;
  const dataLength = textInput.getAttribute("data-length");

  if (inputValue.length === Number(dataLength)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
  textInput.classList.remove("valid");
  textInput.classList.add("invalid");
});
// console.log(textInput);
