import { getElement, getElementAll } from "./myFunctions";

const todoForm = getElement("#todo-form");
const addInput = getElement("#add-input");
const todoList = getElement("#todo-list");
const todoListFin = getElement("#todo-list_finish");
const todoItems = getElementAll(".todo-item");

export { todoForm, addInput, todoList, todoItems, todoListFin };
