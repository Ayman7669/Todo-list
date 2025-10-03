const addBtn = document.getElementById("add-btn");
const customTaskInput = document.getElementById("custom-task"); 
const taskInput = document.getElementById("task-input");
const categorySelect = document.getElementById("category-select");
const taskList = document.getElementById("task-list");

// Function to add a task with category
function addTask() {
  // Prefer custom text, else dropdown
  const taskText = customTaskInput.value.trim() || taskInput.value.trim();
  const category = categorySelect.value;

  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");

  // Wrap task and category together
  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("task-wrapper");

  // Task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.classList.add("task-text");

  // Toggle complete on task text click
  taskSpan.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Category label (right beside task text)
  const categorySpan = document.createElement("span");
  categorySpan.textContent = category;
  categorySpan.classList.add("category-label", category);

  // Put task + category together
  taskWrapper.appendChild(taskSpan);
  taskWrapper.appendChild(categorySpan);

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      taskSpan.textContent = newTask.trim();
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Build final list item
  li.appendChild(taskWrapper);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Reset fields
  customTaskInput.value = "";
  taskInput.value = "";
  categorySelect.value = "General";
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key for custom input
customTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
