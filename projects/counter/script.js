const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const counter = document.getElementById("count");

let count = 0;
decrement.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 0;
  }
  counter.innerText = count;
});
increment.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});
reset.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
});