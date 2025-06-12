const LOCAL_STORAGE_KEY = "todoItems";

let arr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

function saveToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));
}

function refreshTodos() {
  const todos = document.getElementById("todo-list");
  todos.innerHTML = "";

  arr.map((value, index) => {
    const li = document.createElement("li");
    li.classList.add("flex", "items-center", "gap-2", "justify-center");

    const label = document.createElement("label");
    label.innerHTML = value.title;
    label.textContent = value.title;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = value.status;
    checkbox.addEventListener("change", function () {
      value.status = this.checked;
      if (this.checked) {
        label.classList.add("line-through");
      } else {
        label.classList.remove("line-through");
      }
      saveToLocalStorage();
    });

    if (value.status) {
      label.classList.add("line-through");
    }

    li.appendChild(checkbox);
    li.appendChild(label);
    todos.appendChild(li);
  });
}

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const text = todoInput.value.trim();

  if (text === "") return;

  arr.push({
    title: text,
    status: false,
  });

  saveToLocalStorage();

  refreshTodos();
  todoInput.value = "";
}

refreshTodos();