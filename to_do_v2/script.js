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
    createtodoitem(todoText);
    todoInput.value = "";
  }
}
function createtodoitem(todo) {
  const todoLi = document.createElement("li");
  todoLi.innerText = todo;
  todoList.append(todoLi)
}
