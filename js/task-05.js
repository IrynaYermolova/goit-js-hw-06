// const nameInput = document.querySelector('#name-input')
// const nameOutput = document.querySelector('#name-output')

// nameInput.addEventListener('input', event => {
// 	nameOutput.textContent = event.target.value

// 	if (event.target.value === '') {
// 		nameOutput.textContent = 'Anonymous'
// 	}
// })

// * <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
