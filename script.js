const arr = [
  {
    title: "hello world",
    status: true,
  },
  {
    title: "hello world-2",
    status: false,
  },
];

arr.map((value, index) => {
  const li = document.createElement("li");
  li.classList.add("flex", "items-center", "gap-2", "justify-center");

  const label = document.createElement("label");
  label.setAttribute("for", "todoInput");
  label.innerHTML = value.title;
  label.textContent = value.title;

  const checkbox = document.createElement("input");
  checkbox.setAttribute("id", "todoInput");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      label.classList.add("line-through");
    } else {
      label.classList.remove("line-through");
    }
  });

  const node = document.createElement("label");
  const todos = document.getElementById("todo-list");
  todos.appendChild(checkbox);
  todos.appendChild(node);

  li.appendChild(checkbox);
  li.appendChild(label);

  document.getElementById("todo-list").appendChild(li);

  todoInput.value = "";
});

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const text = todoInput.value.trim();

  if (text === "") return;

  arr.push({
    
  });
}
