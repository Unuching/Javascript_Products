const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo_input");
const rodoList = document.getElementById("todo_list");

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
function createtodoitem(todo){

}