//  divEl=document.querySelector('#counter');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

// console.log(action[0],dataset.action);
let counterValue = 0;
const valueEl = document.getElementById("value");

const counterClickDecrementBtn = (evt) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const counterClickIncrementBtn = (evt) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", counterClickDecrementBtn);
incrementBtn.addEventListener("click", counterClickIncrementBtn);

console.log(counterClickDecrementBtn);
console.log(counterClickIncrementBtn);
