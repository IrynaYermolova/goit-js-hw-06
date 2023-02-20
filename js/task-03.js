const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");

const itemEl = images
  .map(
    (image) =>
      `<li><img class="gallery-img" src="${image.url}" alt="${image.alt}" width="350"></img></li>`
  )
  .join("");

listEl.insertAdjacentHTML(`afterbegin`, itemEl);
const pictures = document.querySelectorAll(`.gallery-img`);
console.log(listEl);

listEl.style.display = "flex";
listEl.style.listStyle = "none";
listEl.style.gap = "30px";
listEl.style.justifyContent = "center";
listEl.style.flexDirection = "column";

// const itemEl = document.createElement("li");
// itemEl.classList.add("item")
