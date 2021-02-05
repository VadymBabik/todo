import {
  todoForm,
  addInput,
  todoList,
  todoListFin,
  todoItems,
} from "./variables";
import { getElement, getElementAll, createHtmlElem } from "./myFunctions";
function bindEvents(todoItem) {
  const checkbox = todoItem.querySelector(".checkbox");
  const editButton = todoItem.querySelector("button.edit");
  const deleteButton = todoItem.querySelector("button.delete");

  checkbox.addEventListener("change", toggleTodoItem);
  editButton.addEventListener("click", editTodoItem);
  deleteButton.addEventListener("click", deleteTodoItem);
}
/////*****!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function toggleTodoItem() {
  const listItems = this.parentNode;
  const listItemsAll = this.parentNode.parentNode;
  listItems.classList.toggle("completed");
  const editButton = listItemsAll.querySelector(".edit");
  editButton.classList.toggle("show");

  //
  if (this.checked) {
    // alert("11");
    todoListFin.appendChild(listItemsAll);
    // const ddd = this.parentNode;
    // console.log(ddd);
  } else {
    // console.log(todoListFin);
    todoList.appendChild(todoListFin);
  }
}
//
function editTodoItem() {
  const listItemsIn = this.parentNode.parentNode;
  const listItems = this.parentNode;
  const title = listItemsIn.querySelector(".title");
  const editInput = listItemsIn.querySelector(".textfield");
  const isEditing = listItemsIn.classList.contains("editing");
  const checked = listItemsIn.querySelector(".checkbox");
  if (isEditing) {
    checked.classList.toggle("op");
    editInput.classList.toggle("show");
    title.classList.toggle("show");
    title.textContent = editInput.value;
    this.textContent = "Edit";
  } else {
    checked.classList.toggle("op");
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
////---*****!!!!!!!!!!!!!!!!!!!!!!!!!!!
function completed() {
  const todoFinish = getElement(".todo-finish");
  const listFinish = getElement("#todo-list_finish");
  const itemFinish = listFinish.querySelector(".todo-item");

  console.log(itemFinish);
  if (!itemFinish) {
    todoFinish.classList.toggle("show");
  }
  //
  // todoItems.forEach((item) => {
  //   console.log(item);
  //   alert(item);
  //   const checkbox = item.querySelector(".checkbox");
  //
  //   if (checkbox.checked) {
  //     // alert("11");
  //     todoListFin.appendChild(listFinish);
  //     // const ddd = this.parentNode;
  //     // console.log(ddd);
  //   } else {
  //     // console.log(todoListFin);
  //     todoList.appendChild(todoListFin);
  //   }
  // });
}

export { bindEvents, completed };
