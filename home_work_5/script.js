function promptSort() {
  let result = [];
  let count;
  do {
    count = enterNum("Enter count numbers for sort:");
  } while (count < 3)
  
  for (let i = 0; i < count; i++) {
    result.push(enterNum("enter number"));
  }
  alert(sort(result));
}

function enterNum(desc) {
  let response;
  do {
    response = +prompt(desc);
  } while (isNaN(response));
  return response;
}

function sort(arr) {
  let tmp;
  const len = arr.length
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


// Get button
const startSort= document.getElementsByTagName("button");

// Action button
startSort[0].addEventListener("click", () => promptSort());