// this exercice focuses more on the aspect of creating , appending and removing elements into the html , dom , also something to note is for each item in the list we will put the text into a inline element span so that we can easily append the delete and complete button to the elemnt otherwise it will be overwritten if we put the input text directly into the li etext content , i still dont really get the logic but i have tried many times andit seems using span is currently the only thing that can solve the display 
const addnoise=new Audio("264981__renatalmar__sfx-magic.wav");
const completenoise=new Audio("761648__jellydaisies__pencil-scribble-11.wav");
const deletenoise=new Audio("662342__fmaudio__interface-erase-8.wav");
const taskInput = document.getElementById("tasktext");
const addTaskBtn = document.getElementById("addtask");
const taskList = document.getElementById("tasklist");
function addTask() {
    addnoise.play();
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!"); // Show an alert if the input is empty
        return;
    }
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "💾";
    completeBtn.classList.add("btn", "btn-success", "btn-sm", "ms-2");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
    completeBtn.addEventListener("click", function () {
        completenoise.play();
        taskSpan.classList.toggle("text-decoration-line-through");
    });
    deleteBtn.addEventListener("click", function () {
        deletenoise.play();
        listItem.remove();
    });
    listItem.style.marginBottom = "10px";
    listItem.appendChild(taskSpan);
    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = "";
}
addTaskBtn.addEventListener("click", addTask);
