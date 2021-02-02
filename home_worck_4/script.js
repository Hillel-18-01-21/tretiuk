let log = [];

function promptCalc(log) {
  let result;
  let operation;
  const interfaceOptions = ["history", "exit"];
  const twoOperandOptions = ["+", "-", "*", "/", "min", "max"];
  const oneOperandOptions = ["sin"];
  let firstOperand;
  let secondOperand;
  let trigger;
  let logString = "";
  let exit = true;

  alert("Hello!");
  do {
    // Enter
    do {

      operation = prompt(
        "Enter one of type operation '+', '-', '*','/', 'sin', 'min', 'max' or enter 'exit'"
      ).toLowerCase();
      trigger =
        twoOperandOptions.includes(operation) ||
        interfaceOptions.includes(operation) ||
        oneOperandOptions.includes(operation);
    } while (!trigger);

    // Input data
    inputData(operation);

    // Exit
    exit = confirm("Do you want to continue calculating?");

  } while (exit);

  //  My math object
  const myMath = {
    sum: function (a, b) {
      return a + b;
    },

    diff: function (a, b) {
      return a - b;
    },

    mult: function (a, b) {
      return a * b;
    },
    div: function (a, b) {
      if (b === 0) return "math error: you cannot divide by zero";
      return a / b;
    },
    sin: (operand) => {
      return Math.sin(operand);
    },
    min: (a, b) => {
      return a < b ? a : b;
    },

    max: (a, b) => {
      return a > b ? a : b;
    },
  };

  // Interface option object
  const InterfaceOptions = {
    exit: () => {
      exit = !exit;
    },
    history: () => {
      log.forEach((elem) => {
        logString += `${elem}\n`;
      });
      renderLog(logString);
    },
  };

  function inputData(operation) {
    // interface option
    if (interfaceOptions.includes(operation)) {
      InterfaceOptions[operation]();
    } else if (twoOperandOptions.includes(operation)) {
      console.log("test");
      do {
        firstOperand = Number(prompt("Enter first operand"));
      } while (isNaN(firstOperand));

      do {
        secondOperand = Number(prompt("Enter second operand"));
      } while (isNaN(secondOperand));

      calcFunctions(operation, firstOperand, secondOperand);
    } else if (oneOperandOptions.includes(operation)) {
      do {
        firstOperand = Number(prompt("Enter operand"));
      } while (isNaN(firstOperand));

      calcFunctions(operation, firstOperand);
    }
  }

  // Calc options worker
  function calcFunctions(operation, firstOperand, secondOperand) {
    switch (operation) {
      case "history":
        logString = InterfaceOptions.history();
        break;
      case "+":
        result = myMath.sum(firstOperand, secondOperand);
        render(result, "plus");
        break;
      case "-":
        result = myMath.diff(firstOperand, secondOperand);
        render(result, "diff");
        break;
      case "*":
        result = myMath.mult(firstOperand, secondOperand);
        render(result, "mult");
        break;
      case "/":
        result = myMath.div(firstOperand, secondOperand);
        render(result, "div");
        break;
      case "sin":
        result = myMath.sin(firstOperand);
        render(result, "sin");
        break;
      case "min":
        result = myMath.min(firstOperand, secondOperand);
        render(result, "min");
        break;
      case "max":
        result = myMath.max(firstOperand, secondOperand);
        render(result, "max");
        break;
      case "exit":
        break;
      default:
        alert("Демоны");
    }
  }

  // Output

  // Output and rendering results
  function render(result, operation) {
    // Add to LOG
    log.push(`Operation ${operation} finished with result ${result}`);
    // Console result
    console.log(`Operation ${operation} finished with result ${result}`);
    // Alert result
    alert(`Operation ${operation} finished with result ${result}`);

    result = undefined;
  }

  // Output and rendering history
  function renderLog(logString) {
    console.log(logString);
    // Alert log
    alert(logString);
  }
}

// Get button
const startCalc = document.getElementsByTagName("button");

// Action button
startCalc[0].addEventListener("click", () => promptCalc(log));
