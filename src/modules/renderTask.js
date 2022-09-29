import { Todo, todoData } from './arrayObject.js';

const Store = (todo) => {
  todo.sort((a, b) => a.index - b.index);
  localStorage.setItem('todo', JSON.stringify(todo));
};
const todoList = document.querySelector('#todoList');
const createTodo = () => {
  Store(todoData);
  todoList.innerHTML = todoData.map((data) => `
                              <li class=".todos"><input type="checkbox" id="checked" ${data.completed ? 'checked' : ''} >
                              <input type="text" id="mylist" value= "${data.description}">
                              <i class="fa-solid fa-ellipsis-vertical move"></i>
                              <button id="delete"><i class="fa-solid fa-trash-can"></i></button></li>`).join('');
  const deleteBtn = document.querySelectorAll('#delete');
  const move = document.querySelectorAll('.move');
  move.forEach((button, index) => button.addEventListener('click', () => {
    move[index].style.display = 'none';
    deleteBtn[index].style.display = 'flex';
    deleteBtn[index].style.color = 'red';
  }));
  deleteBtn.forEach((button, index) => button.addEventListener('click', () => {
    const item = index + 1;
    Todo.deleteTodo(item);
    createTodo();
  }));

  const mylist = document.querySelectorAll('#mylist');
  mylist.forEach((input, index) => input.addEventListener('change', () => {
    todoData[index].description = input.value;
    Store(todoData);
  }));
};

export { createTodo, Store };
