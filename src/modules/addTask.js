import { Todo, todoData } from './arrayObject.js';
import createTodo from './renderTask.js';

const addTask = document.querySelector('#add-todo');
const task = document.querySelector('#todo');
const notify = document.querySelector('.notify');

const notifyError = () => {
  notify.style.display = 'flex';
  notify.textContent = 'Please enter a task';
  notify.style.color = 'red';
  setTimeout(() => {
    notify.style.display = 'none';
  }, 2000);
};

const notifySuccess = () => {
  notify.style.display = 'flex';
  notify.textContent = 'Task added successfully';
  setTimeout(() => {
    notify.style.display = 'none';
  }, 2000);
};

const scroll = () => {
  const todoList = document.querySelector('#todoList');
  if (todoData.length >= 5) {
    todoList.style.height = '30vh';
  } else {
    todoList.style.height = 'auto';
  }
};

const add = () => {
  addTask.addEventListener('click', () => {
    if (task.value === '') {
      notifyError();
    } else {
      const todo = new Todo(task.value);
      todoData.push(todo);
      createTodo();
      task.value = '';
      scroll();
      notifySuccess();
    }
  });
};

export default add;