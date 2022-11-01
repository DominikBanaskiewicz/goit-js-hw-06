let counter = document.getElementById("value");
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');

decBtn.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) - 1;
});
incBtn.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) + 1;
});
