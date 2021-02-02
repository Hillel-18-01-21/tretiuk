let log = [];

function promptCalc(log) {
  let result;
  let operation;
  const operations = ["sin", "+", "-", "*", "/", "history", "exit"];
  let firstOperand;
  let secondOperand;
  let trigger;
  let logString = "";
  let exit = true;

  //   My math object
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
  };

//   const sum = function (a, b) {
//     return a + b;
//   };

  const diff = function (a, b) {
    return a - b;
  };

  const mult = function (a, b) {
    return a * b;
  };

  const div = function (a, b) {
    if (b === 0) return "math error: you cannot divide by zero";
    return a / b;
  };

  const sin = (operand) => {
    return Math.sin(operand);
  };

  const math = function (a, b, option) {
    return option(a, b);
  };

  alert("Hello!");
  do {
    do {
      operation = prompt("Enter one of type operation '+', '-', '*','/', 'sin' or enter 'exit'").toLowerCase();
      trigger = operations.includes(operation);
    } while (!trigger);

    if (operation === "exit") {
      exit = !exit;
    } else if (operation === "history") {
      log.forEach((elem) => {
        logString += `${elem}\n`;
      });   
      calcFunctions(operation, firstOperand);
    } else if (operation === "sin") {
      //

      do {
        firstOperand = Number(prompt("Enter operand"));
      } while (isNaN(firstOperand));

      calcFunctions(operation, firstOperand);
    } else {
      do {
        firstOperand = Number(prompt("Enter first operand"));
      } while (isNaN(firstOperand));

      do {
        secondOperand = Number(prompt("Enter second operand"));
      } while (isNaN(secondOperand));
      calcFunctions(operation, firstOperand, secondOperand);
    }
    exit = confirm('Do you want to continue calculating?');
  } while (exit);

  // Calc options
  function calcFunctions(operation, firstOperand, secondOperand) {
    switch (operation) {
      case "history":
        renderLog(logString);
        break;
      // with maMath object
      case "+":
        result = myMath.sum(
          firstOperand,
          secondOperand
        );
        //--------------------------------
        render(result, 'plus');
        break;
      case "-":
        result = math(
          firstOperand,
          secondOperand,
          diff
        );
        render(result, 'diff');
        break;

      case "*":
        result = math(
          firstOperand,
          secondOperand,
          mult
        );
        render(result, 'mult');
        break;
      case "/":
        result = math(
          firstOperand,
          secondOperand,
          div
        );
        render(result, 'div');
        break;
      case "sin":
        result = sin(firstOperand);
        render(result, 'sin');
        break;
      case "exit":
        exit = !exit;
        break;
      default:
        alert("Нет таких операций");
    }
  }

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

const startCalc = document.getElementsByTagName("button");

startCalc[0].addEventListener("click", () => promptCalc(log));
