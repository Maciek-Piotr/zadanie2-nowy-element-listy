const btn = document.querySelector("button");
const ul = document.querySelector("ul");
let numberOfElement = 0;
const addListElement = () => {
  numberOfElement++;
  const newLi = document.createElement("li");
  ul.appendChild(newLi);
  newLi.textContent = numberOfElement;

  if (numberOfElement % 5 === 0) {
    newLi.classList.add("big");
  }
};
btn.addEventListener("click", addListElement);
