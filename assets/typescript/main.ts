let switchBtn: HTMLImageElement = document.getElementById("switch") as HTMLImageElement;
switchBtn.onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
};

interface Task {
  date: string;
  status: string;
  task: string;
}

let taskList: Task[] = [];

if (localStorage.getItem("tasks") !== null) {
  const tasks: string | null = localStorage.getItem("tasks");
  taskList = tasks ? JSON.parse(tasks) : [];
}

showTask();

function addTask(): void {
  let taskInput: HTMLInputElement = document.getElementById("task-input") as HTMLInputElement;

  if (taskInput.value !== "") {
    taskList.push({ task: taskInput.value, date: new Date().toLocaleString(), status: "In progress" });
    localStorage.setItem("tasks", JSON.stringify(taskList));
    taskInput.value = "";
    showTask();
  } else {
    alert("You should Add a Task");
  }
}

function showTask(): void {
  let taskItem: string = "";
  for (let i: number = 0; i < taskList.length; i++) {
    taskItem += `
      <li>${i + 1}- ${taskList[i].task} <br> ${taskList[i].date} ${taskList[i].status}</li>
    `;
  }

  let taskListElement: HTMLOListElement = document.getElementById("task-list") as HTMLOListElement;

  taskListElement.innerHTML = taskItem;
}

let addTaskBtn: HTMLButtonElement = document.getElementById("add-task-btn") as HTMLButtonElement;

addTaskBtn.onclick = () => addTask();
