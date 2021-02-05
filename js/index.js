"use strict";
import { createTodoItem } from "./create";
import { bindEvents, completed } from "./events";
import { todoForm, addInput, todoList, todoItems } from "./variables";
//
todoForm.addEventListener("submit", addTodoItem);

function addTodoItem(event) {
  event.preventDefault();
  if (!addInput.value) {
    return alert("ned add task");
  }
  const listItems = createTodoItem(addInput.value);
  todoList.appendChild(listItems);
  addInput.value = "";
}
//
function eventTodoItem(e) {
  const todoItemAll = document.querySelectorAll(e);
  todoItemAll.forEach((item) => {
    bindEvents(item);
  });
}

eventTodoItem(".todo-item");

completed();
//
