document.getElementById("switch").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
};

/*
 * In progress
 * Completed
 */

/*
 * localStorage.setItem("item", value)
 * localStorage.getItem("item")
 * localStorage.removeItem("item")
 */

let taskList = "";

if (localStorage.getItem("tasks") !== null) {
  taskList = localStorage.getItem("tasks");
}

function addTask() {
  let taskInput = document.getElementById("task-input");
  let taskStatus = "In progress";
  taskList += `
    <li>${taskInput.value}<br>
    ${new Date().toLocaleString()}| ${taskStatus}</li>
  `;
  localStorage.setItem("tasks", taskList);
  taskInput.value = "";
  showTask();
}

function showTask() {
  document.getElementById("task-list").innerHTML = localStorage.getItem("tasks");
}
showTask();
document.getElementById("add-task-btn").onclick = () => addTask();
