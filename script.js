const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("task-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");


const taskData = [];
let currentTask = {};

// use the toggle method to show or hide if the class is present are not
openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal();
});


cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    taskForm.classList.toggle("hidden");
})

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

// checking if the id of item ans currentTask are equal
const  dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);