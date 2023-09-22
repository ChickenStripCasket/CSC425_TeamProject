
// Variables for completed tasks and total tasks
let completedTasks = 0;
let totalTasks = 0;

// Function to update task counter
function updateTaskCounter() {
  document.getElementById('task-counter').textContent = `${completedTasks}/${totalTasks} tasks completed`;
}

// Event listeners for view buttons
document.getElementById('card-view-button').addEventListener('click', function() {
  // Code to switch to card view goes here
});

document.getElementById('list-view-button').addEventListener('click', function() {
  // Code to switch to list view goes here
});

// Call function to update task counter
updateTaskCounter();
