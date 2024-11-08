// DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Add Task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;
    
    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', function () {
      editTask(li, taskText);
    });

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteTask(li);
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = ''; // Clear the input field
  }
}

// Edit Task
function editTask(taskElement, oldTaskText) {
  const newTaskText = prompt("Edit your task", oldTaskText);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskElement.firstChild.textContent = newTaskText.trim();
  }
}

// Delete Task
function deleteTask(taskElement) {
  taskList.removeChild(taskElement);
}

// Event listener for the Add Task button
addTaskButton.addEventListener('click', addTask);

// Allow pressing "Enter" to add task as well
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
