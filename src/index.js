import './styles.css';

import { Todo,TodoList } from "./classes";
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHTML(todo));

// const newTodo = new Todo('Aprender JS')
// todoList.nuevoTodo(newTodo);
console.log(todoList);

// crearTodoHTML(tarea)

// localStorage.setItem('mi-key','ABC1234');
// // sessionStorage.setItem('mi-key','ABC1234');
// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);