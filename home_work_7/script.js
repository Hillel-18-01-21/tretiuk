const addBTN = document.querySelector("#addBTN");
const inputArea = document.querySelector("#input");
const taskList = document.querySelector("#taskList");
const delBTN =  document.querySelector("#delBTN");


console.dir(addBTN);
console.dir(inputArea);
console.dir(taskList);

addBTN.addEventListener("click", () => onAddTask());

taskList.addEventListener("click",(e) => onCompleteTask(e));

delBTN.addEventListener("click",() => onDeleteTask());

function onDeleteTask () {
  const tasks = document.getElementsByClassName("task")

  for (let i = 0 ; i < tasks.length; i++) {
    if (tasks[i].dataComplete){

      tasks[i].remove();

    }
  }
}

function onCompleteTask(e){
  const completedTask = e.target;
  const taskTextElem = completedTask.nextElementSibling;

  if (completedTask.checked && taskTextElem.className == "task-complete") {
    taskTextElem.className = "";
    completedTask.checked = false;
    completedTask.parentElement.dataComplete = false;
  } else {
    taskTextElem.className = "task-complete";
    completedTask.parentElement.dataComplete = true;
    console.dir(completedTask.parentElement);
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
    console.dir(taskRadio.checked);
    taskRadio.className = "taskCompleteRadio";
  
    newTask.appendChild(taskRadio);
    newTask.appendChild(textTask);
    taskList.appendChild(newTask);
  }

}

