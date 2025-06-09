function add_todo() {
    const todo_input = document.getElementById("todo-input");
    const text = todo_input.value.trim();
    console.log("text", text);
    
    if (text === "") return;

  const checkbox = document.createElement("checkbox");
  checkbox.textContent = text;

//   const deleteBtn = document.createElement("button");
//   deleteBtn = "✔️";
//   deleteBtn = () => {li.};
}
