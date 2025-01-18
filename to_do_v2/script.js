const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo_input");
const todoList = document.getElementById("todo_list");

let alltodos = [];
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addtodo();
});
function addtodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    alltodos.push(todoText);
    updatetodolist();
    saveTodos();
    todoInput.value = "";
  }
}
function updatetodolist() {
  todoList.innerHTML = "";
  alltodos.forEach((todo, todoIndex) => {
    todoItem = createtodoitem(todo, todoIndex);
    todoList.append(todoItem);
  });
}
function createtodoitem(todo, todoIndex) {
  const todoID = "todo-" + todoIndex;
  const todoLi = document.createElement("li");
  todoLi.className = "todo";
  todoLi.innerHTML = `<input type="checkbox" id="${todoID}" />
          <label class="custom_checkbox" for="${todoID}">
            <svg fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          </label>
          <label for="${todoID}" class="todo_text">
            ${todo}
          </label>
          <button class="delete_button">
            <svg
              fill="var(--secondary-color)"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
              />
            </svg>
          </button>`;
  return todoLi;
}
function saveTodos() {
  const todoJson = JSON.stringify(alltodos);
  localStorage.setItem("todos", todoJson);
}
