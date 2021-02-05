import { getElement, getElementAll, createHtmlElem } from "./myFunctions";
import { bindEvents } from "./events";
function createTodoItem(title) {
  const checkbox = createHtmlElem("input", {
    type: "checkbox",
    className: "checkbox",
    // id: "checkbox",
  });
  const label = createHtmlElem("label", {
    className: "title",
    for: "addInput.value",
  });
  label.innerText = title;
  const editInput = createHtmlElem("input", {
    type: "text",
    className: "textfield show",
  });
  const editButton = createHtmlElem("button", { className: "edit btn" });
  editButton.innerText = "edit";
  const deleteButton = createHtmlElem("button", { className: "delete btn" });
  deleteButton.innerText = "delete";
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const todoItemInput = createHtmlElem("div", {
    className: "todo-item__input",
  });
  todoItemInput.append(checkbox, label, editInput, editInput);

  const todoItemButton = createHtmlElem("div", {
    className: "todo-item__button",
  });
  todoItemButton.append(editButton, deleteButton);
  listItem.append(todoItemInput, todoItemButton);

  bindEvents(listItem);
  return listItem;
}

export { createTodoItem };
