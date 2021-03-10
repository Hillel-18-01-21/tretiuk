const buttons = document.querySelectorAll("button");

let onFibCounters = [];

buttons.forEach((elem, i) => {
  onFibCounters[i] = fib(elem);
  elem.addEventListener("click", (elem) => onFibCounters[i](elem));
});

function fib(target) {
  let prev = 0;
  let next = 1;
  let count = 0;
  return function nextFib() {
    next = prev + (prev = next);
    target.nextElementSibling.innerText = `Sequence number: ${++count} Fibonacci number: ${prev}`;
  };
}
