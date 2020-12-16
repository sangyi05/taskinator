var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();

    //created a new task item
    var listItemEl = document.createElement("li");
    //styled the new task item to match id="task-item" class
    listItemEl.className = "task-item";
    //added the text below
    listItemEl.textContent = "This is a new task.";
    //added this new task item to the task list
    tasksToDoEl.appendChild(listItemEl);

};

    formEl.addEventListener("submit", createTaskHandler)
