"use strict";
import "/scss/style.scss";

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
  const label = CHE("label", { className: "title", for: "checkbox" });
  label.innerText = title;
  //
  //const editInput = CHE("input", {type: "text", className: "textfield"})
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
  todoItemInput.appendChild(label /*,editInput*/);

  const todoItemButton = CHE("div", { className: "todo-item__button" });
  todoItemButton.appendChild(editButton);
  todoItemButton.appendChild(deleteButton);

  listItem.appendChild(todoItemInput);
  listItem.appendChild(todoItemButton);
  return listItem;
}

//
function addTodoItem(event) {
  event.preventDefault();
  if (!addInput.value) {
    return alert("ned add task");
  }
  const listItems = createTodoItem(addInput.value);
  todoList.appendChild(listItems);
}

const getElement = (e) => document.querySelector(e);
const getElementAll = (e) => document.querySelectorAll(e);

//
const todoForm = getElement("#todo-form");
const addInput = getElement("#add-input");
const todoList = getElement("#todo-list");
const todoItems = getElementAll(".todo-item");
//

todoForm.addEventListener("submit", addTodoItem);
//
