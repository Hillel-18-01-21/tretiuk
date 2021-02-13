function processTheArray(arr) {
  if (!arr) {
    arr = enterData();
  }

  let result = selectOperation(arr, prompt("Enter operation: 'sort', '%3', 'join', 'min','max'."));
  alert(result);
  if (confirm("Do you wont repeat operation?")) {
    if (confirm("Do you wont enter a new data?")) {
      processTheArray(enterData());
    } else {
      processTheArray(arr);
    }
  }

}

function selectOperation(arr, operation) {
  switch (operation) {
    case "sort":
      return sortUp(arr);
    case "%3":
      return multThree(arr);
    case "join":
      return joinArrToString(arr, prompt("Enter deliver:"));
    case "min":
      return min(arr);
    case "max":
      return max(arr);
    default:
      return selectOperation(arr, prompt("Enter operation: 'sort', '%3', 'join', 'min','max'."));
  }
}

function enterData() {
  let result = [];

  let str = prompt("Enter numbers with coma:");
  result = str.split(",");
  result.forEach((elem, i, result) => {
    console.log(+elem);
    if (isNaN(+elem) || result.length < 2) {
      enterData();
    }
  });

  return result;
}

function multThree(arr) {
  const result = [];
  arr.forEach((elem) => {
    elem = +elem;
    if (elem % 3 === 0) {
      result.push(elem);
    }
  });
  return result;
}

function min(arr) {
  let result = +Infinity;
  arr.forEach((elem) => {
    elem = +elem;
    result > elem ? (result = elem) : result;
  });
  return result;
}

function max(arr) {
  let result = -Infinity;
  arr.forEach((elem) => {
    elem = +elem;
    result < elem ? (result = elem) : result;
  });
  return result;
}

function sortUp(arr) {
  let tmp;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let k = 0; k < len; k++) {
      if (arr[i] < arr[k]) {
        tmp = arr[i];
        arr[i] = arr[k];
        arr[k] = tmp;
      }
    }
  }
  return arr;
}

function joinArrToString(arr, divider) {
  return arr.join(divider);
}

function sortDown(arr) {
  let tmp;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let k = 0; k < len; k++) {
      if (arr[i] > arr[k]) {
        tmp = arr[i];
        arr[i] = arr[k];
        arr[k] = tmp;
      }
    }
  }
  return arr;
}

// Get button
const startSort = document.getElementsByTagName("button");

// Action button
startSort[0].addEventListener("click", () => processTheArray());
