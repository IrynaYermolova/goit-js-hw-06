// const ingredients = [
// "Potatoes",
// "Mushrooms",
// "Garlic",
// "Tomatos",
// "Herbs",
// "Condiments",

//   const itemEl = document.createElement('li');
//   console.log(itemEl);
//   itemEl.classList.add('item');
//   itemEl.textContent = "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments";

//   const listEl = document.querySelector('#ingredients');
// listEl.appendChild(itemEl);

// const itemArray = [];
// const listEl = document.querySelector("#ingredients");
// console.log(listEl);
// itemEl.classList.add("item");

// ingredients.map(ingredient => {

//   itemEl.textContent = ingredient;
//   itemArray.push(itemEl);

// });

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const itemArray = [];
const listEl = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");

  itemArray.push(itemEl);
  listEl.append(itemEl);
});
