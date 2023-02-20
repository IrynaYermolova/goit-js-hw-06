const list = document.querySelectorAll(".item");

console.log(`${list.length}`);

const ul = document.querySelectorAll("#categories > li");
ul.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`
  );
});
