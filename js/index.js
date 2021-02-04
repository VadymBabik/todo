"use strict";
import "/scss/style.scss";
import "/node_modules/reset-css/sass/_reset.scss";
//
function createTodoItem(title) {
  //
  function CHE(tag, props, ...children) {
    const element = document.createElement(tag);
    Object.keys(props).forEach((key) => (element[key] = props[key]));
    return element;
  }

  //
  const checkbox = CHE("input", {
    type: "checkbox",
    className: "checkbox",
    id: "checkbox",
  });
  //
  const label = CHE("label", { className: "title", for: "addInput.value" });
  label.innerText = title;
  //
  const editInput = CHE("input", { type: "text", className: "textfield show" });
  //
  const editButton = CHE("button", { className: "edit btn" });
  editButton.innerText = "edit";
  //
  const deleteButton = CHE("button", { className: "delete btn" });
  deleteButton.innerText = "delete";
  //
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const todoItemInput = CHE("div", { className: "todo-item__input" });
  todoItemInput.appendChild(checkbox);
  todoItemInput.appendChild(label, editInput);
  todoItemInput.appendChild(editInput);

  const todoItemButton = CHE("div", { className: "todo-item__button" });
  todoItemButton.appendChild(editButton);
  todoItemButton.appendChild(deleteButton);

  listItem.appendChild(todoItemInput);
  listItem.appendChild(todoItemButton);
  bindEvents(listItem);
  return listItem;
}
//
function bindEvents(todoItem) {
  const checkbox = todoItem.querySelector(".checkbox");
  const editButton = todoItem.querySelector("button.edit");
  const deleteButton = todoItem.querySelector("button.delete");

  checkbox.addEventListener("change", toggleTodoItem);
  editButton.addEventListener("click", editTodoItem);
  deleteButton.addEventListener("click", deleteTodoItem);
}
//
function addTodoItem(event) {
  event.preventDefault();
  if (!addInput.value) {
    return alert("ned add task");
  }
  const listItems = createTodoItem(addInput.value);
  todoList.appendChild(listItems);
  addInput.value = "";
}

const eventTodoItem = (e) => {
  const todoItemAll = document.querySelectorAll(e);
  todoItemAll.forEach((item) => {
    bindEvents(item);
  });
};
eventTodoItem(".todo-item");
function toggleTodoItem() {
  const listItems = this.parentNode;
  const listItemsAll = this.parentNode.parentNode;
  listItems.classList.toggle("completed");
  const editButton = listItemsAll.querySelector(".edit");
  editButton.classList.toggle("show");
}
function editTodoItem() {
  const listItemsIn = this.parentNode.parentNode;
  const listItems = this.parentNode;
  const title = listItemsIn.querySelector(".title");
  const editInput = listItemsIn.querySelector(".textfield");
  const isEditing = listItemsIn.classList.contains("editing");
  if (isEditing) {
    editInput.classList.toggle("show");
    title.classList.toggle("show");
    title.textContent = editInput.value;
    this.textContent = "Edit";
  } else {
    editInput.classList.toggle("show");
    title.classList.toggle("show");
    editInput.value = title.innerText;
    this.textContent = "Save";
  }
  listItemsIn.classList.toggle("editing");
}
function deleteTodoItem() {
  const listItemsIn = this.parentNode.parentNode;
  todoList.removeChild(listItemsIn);
}

const getElement = (e) => document.querySelector(e);
const getElementAll = (e) => document.querySelectorAll(e);

//
const todoForm = getElement("#todo-form");
const addInput = getElement("#add-input");
const todoList = getElement("#todo-list");
const todoItems = getElementAll(".todo-item");
// const todoListAll = getElementAll("#todo-list");
//

todoForm.addEventListener("submit", addTodoItem);
//
