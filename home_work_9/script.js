const firstOperandEl = document.getElementById("firstOperand");
const secondOperandEl = document.getElementById("twoOperand");
const operationEl = document.getElementById("operation");
const calculateBTN = document.getElementById("calculate");
const resultEl = document.getElementById("result");
const resultTemplate = document.getElementById("resultTemplate").innerHTML;

let operation = "add";
let firstOperand;
let secondOperand;

firstOperandEl.addEventListener("change", (e) => firstOperand = onInput(e.target));
secondOperandEl.addEventListener("change", (e) => secondOperand = onInput(e.target));
operationEl.addEventListener("change", (e) => operation = e.target.value);
calculateBTN.addEventListener("click", () => calcFunctions(operation, firstOperand, secondOperand));

function onInput(target) {
  if (target.valueAsNumber || target.valueAsNumber === 0) {
    target.classList.remove("empty");
    return target.valueAsNumber;
  } else {
    target.classList.add("empty");
  }
}

function resultRender(result) {
  resultEl.innerHTML = resultTemplate
    .replace("{{firstOperand}}", firstOperand.toString())
    .replace("{{secondOperand}}", secondOperand.toString())
    .replace("{{operation}}", operation)
    .replace("{{result}}", result);
}

function calcFunctions(operation, firstOperand, secondOperand) {
  switch (operation) {
    case "add":
      resultRender(firstOperand + secondOperand);
      break;

    case "sub":
      resultRender(firstOperand - secondOperand);
      break;

    case "mult":
      resultRender(firstOperand * secondOperand);
      break;

    case "div":
      if (firstOperand === 0) {
        result = "math error: you cannot divide by zero";
      }
      result = firstOperand / secondOperand;
      resultRender(result);
      break;

    default:
      alert("Демоны");
  }
}
