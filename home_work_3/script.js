
alert("Hello!");

let firstOperand = +prompt("Enter first operand"); // не явное преобразование

let secondOperand = Number(prompt("Enter second operand")); //явное преобразование

let resultString = 'Calculations are finished!\n';



const sum = function (a, b){
    return a+b;
};

const diff = function (a, b){
    return a-b;
};

const mult = function (a, b){
    return a*b;
};

const div = function (a, b){
    if(b === 0) return 'math error: you cannot divide by zero';
    return a/b;
};

const math = function (a,b, option) {
    return option (a,b);
};

resultString+= `Sum: ${firstOperand} + ${secondOperand} = ${math(firstOperand,secondOperand, sum)}\n
Diff: ${firstOperand} - ${secondOperand} = ${math(firstOperand,secondOperand, diff)}\n
Mult: ${firstOperand} * ${secondOperand} = ${math(firstOperand,secondOperand, mult)}\n
Div: ${firstOperand} / ${secondOperand} = ${math(firstOperand,secondOperand, div)}`;

// Calculations are finished!
// Sum: 2 + 2 = 4
// Diff: 2 - 2 = 0
// Mult: 2 * 2 = 4
// Div: 2 / 2 = 1 if secondOperand === 0, Div: 2 / 0 = math error: you cannot divide by zero

// Console result
console.log(resultString);
// Alert result
alert(resultString);

