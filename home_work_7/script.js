const addBTN = document.querySelector("#addBTN");
const inputArea = document.querySelector("#input");
const taskList = document.querySelector("#taskList");
const delBTN =  document.querySelector("#delBTN");

let history = [];

console.dir(addBTN);
console.dir(inputArea);
console.dir(taskList);

addBTN.addEventListener("click", () => onAddTask());

taskList.addEventListener("click",(e) => onCompleteTask(e));

delBTN.addEventListener("click",() => onDeleteTasks());

function onDeleteTasks () {
  const tasks = document.getElementsByClassName("task");
  [...tasks].forEach(elem => elem.dataComplete? elem.remove():elem);
}

function onCompleteTask(e){
  const completedTask = e.target;
  const taskTextElem = completedTask.nextElementSibling;

  if (completedTask.checked && taskTextElem.className === "task-complete") {
    taskTextElem.className = "";
    completedTask.checked = false;
    completedTask.parentElement.dataComplete = false;
  }else if (completedTask.checked){
    taskTextElem.className = "task-complete";
    completedTask.parentElement.dataComplete = true;
  }
}

function onAddTask() {
  if (inputArea.value) {
    const newTask = document.createElement("li");
    newTask.className = "task";
  
    const textTask = document.createElement("p");
    textTask.innerText = inputArea.value;
    inputArea.value = "";

    const taskRadio = document.createElement("input");
    taskRadio.type = "radio";
    taskRadio.className = 'complete';
  
    newTask.appendChild(taskRadio);
    newTask.appendChild(textTask);
    taskList.appendChild(newTask);
  }

}

