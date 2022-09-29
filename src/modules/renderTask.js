import { Todo, todoData } from './arrayObject.js';
import status from './clearAll.js';
import Store from './Store.js';

const todoList = document.querySelector('#todoList');
const createTodo = () => {
  Store(todoData);
  todoList.innerHTML = todoData.map((data) => `
                              <li id="todos" class=".todos"><input type="checkbox" id="checked" ${data.completed ? 'checked' : ''} >
                              <input type="text" id="mylist" value= "${data.description}">
                              <i title="Click to delete" class="fa-solid fa-ellipsis-vertical move"></i>
                              <i class="fa-solid fa-trash-can" id="delete"></i></li>`).join('');
  const deleteBtn = document.querySelectorAll('#delete');
  const move = document.querySelectorAll('.move');
  const todo = document.querySelectorAll('#todos');
  const mylist = document.querySelectorAll('#mylist');
  const trash = document.querySelectorAll('.fa-trash-can');
  const clear = document.querySelector('.clearCompleted');

  move.forEach((button, index) => button.addEventListener('click', () => {
    move[index].style.display = 'none';
    deleteBtn[index].style.display = 'flex';
    trash[index].style.color = 'red';
    todo[index].style.backgroundColor = '#DFDEAB';
    mylist[index].style.backgroundColor = '#DFDEAB';
    deleteBtn[index].backgroundColor = '#DFDEAB';
  }));
  deleteBtn.forEach((button, index) => button.addEventListener('click', () => {
    const item = index + 1;
    Todo.deleteTodo(item);
    createTodo();
  }));

  mylist.forEach((input, index) => input.addEventListener('click', () => {
    todo[index].style.backgroundColor = '#DFDEAB';
    mylist[index].style.backgroundColor = '#DFDEAB';
    deleteBtn[index].backgroundColor = '#DFDEAB';
  }));

  mylist.forEach((input, index) => input.addEventListener('change', () => {
    todoData[index].description = input.value;
    Store(todoData);
  }));

  clear.addEventListener('click', () => {
    const completed = todoData.filter((data) => data.completed === true);
    completed.forEach((data) => {
      const index = todoData.indexOf(data);
      todoData.splice(index, 1);
    });
    Store(todoData);
    createTodo();
  });
  status();
};

export default createTodo;
