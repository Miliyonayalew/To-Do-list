import { Todo, todoData } from './arrayObject.js';
import { createTodo } from './renderTask.js';

const addTask = document.querySelector('#add-todo');
const task = document.querySelector('#todo');

const add = () => {
  addTask.addEventListener('click', () => {
    const todo = new Todo(task.value);
    todoData.push(todo);
    createTodo();
    task.value = '';
  });
};

export default add;