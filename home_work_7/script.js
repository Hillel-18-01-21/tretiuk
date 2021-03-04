const ENTER_KEY_CODE = 13;

const addBTN = document.querySelector("#addBTN");
const inputArea = document.querySelector("#input");
const taskList = document.querySelector("#taskList");
const delBTN =  document.querySelector("#delBTN");



addBTN.addEventListener("click", () => onAddTask());
addBTN.addEventListener("keypress", (e) => {
  if ( e.keyCode === ENTER_KEY_CODE && !e.altKey ) {
    onAddTask()
  }
});

taskList.addEventListener("click",(e) => onCompleteTask(e));


delBTN.addEventListener("click",() => onDeleteTasks());

function onDeleteTasks () {
  const tasks = document.getElementsByClassName("task");
  [...tasks].forEach(elem => elem.dataComplete? elem.remove():elem);
}

function onCompleteTask(e){
  const completedTask = e.target;
  const taskTextElem = completedTask.nextElementSibling;

  if (completedTask.checked && taskTextElem.className === "task-text task-text-complete") {
    taskTextElem.classList.remove("task-text-complete");
    completedTask.checked = false;
    completedTask.parentElement.dataComplete = false;
  }else if (completedTask.checked){
    taskTextElem.classList.add("task-text-complete");
    completedTask.parentElement.dataComplete = true;
  }
}

function onAddTask() {
  if (inputArea.value) {
    const newTask = document.createElement("li");
    newTask.className = "task";
  
    const textTask = document.createElement("p");
    textTask.innerText = inputArea.value;
    textTask.className = 'task-text';
    inputArea.value = "";

    const taskRadio = document.createElement("input");
    taskRadio.type = "checkbox";
    taskRadio.className = 'radio-complete';
  
    newTask.append(taskRadio);
    newTask.appendChild(textTask);
    taskList.prepend(newTask);
  }
}

