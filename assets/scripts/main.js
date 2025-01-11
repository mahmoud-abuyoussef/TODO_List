let tasks = "";
function addTask() {
  let taskData = document.getElementById("task-input");
  tasks += `
    <li>${taskData.value}</li>
  `;
  document.getElementById("tasks").innerHTML = tasks;
  taskData.value = "";
}

document.getElementById("add-task").onclick = () => {
  addTask();
};
