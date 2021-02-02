alert("Hello!");

let name = prompt("What is your name?");

while (name === ''){
    name = prompt("Please enter yor name!");
};
console.log("test", name === undefined);
alert(`Nice to meet you, ${name}`);

