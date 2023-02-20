const inputRef = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRef.addEventListener("input", (evt) => {
  //    const spanRef = document.querySelector('#text');
  const fontSize = evt.target.value;
  text.style.fontSize = `${fontSize}px`;
});
