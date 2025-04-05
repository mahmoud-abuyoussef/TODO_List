"use strict";
let switchBtn = document.getElementById("switch");
switchBtn.onclick = () => {
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
    }
    else {
        document.body.classList.add("dark-theme");
    }
};
let taskList = [];
if (localStorage.getItem("tasks") !== null) {
    const tasks = localStorage.getItem("tasks");
    taskList = tasks ? JSON.parse(tasks) : [];
}
showTask();
function addTask() {
    let taskInput = document.getElementById("task-input");
    if (taskInput.value !== "") {
        taskList.push({ task: taskInput.value, date: new Date().toLocaleString(), status: "In progress" });
        localStorage.setItem("tasks", JSON.stringify(taskList));
        taskInput.value = "";
        showTask();
    }
    else {
        alert("You should Add a Task");
    }
}
function showTask() {
    let taskItem = "";
    for (let i = 0; i < taskList.length; i++) {
        taskItem += `
      <li>${i + 1}- ${taskList[i].task} <br> ${taskList[i].date} ${taskList[i].status}</li>
    `;
    }
    let taskListElement = document.getElementById("task-list");
    taskListElement.innerHTML = taskItem;
}
let addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.onclick = () => addTask();
