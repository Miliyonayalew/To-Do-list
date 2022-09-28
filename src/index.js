import './style.css';

const todoList = document.querySelector('#todoList');

const todoData = [
  {
    description: 'Reading about api',
    completed: true,
    index: 0,
  },
  {
    description: 'Reading about dom manipulation',
    completed: false,
    index: 0,
  },

  {
    description: 'Joining morning standup',
    completed: false,
    index: 0,
  },
];

const createTodo = (todolists) => {
  const todos = document.createElement('li');
  todos.classList.add('todos');
  todos.innerHTML = `
                    <input type="checkbox" id="checked" ${todolists.completed ? 'checked' : ''} >
                    <input type="text" id="mylist" value= "${todolists.description}">
                    <i class="fa-solid fa-ellipsis-vertical move"></i>
                    <button id="delete"><i class="fa-solid fa-trash-can"></i></button>`;
  todoList.appendChild(todos);
  console.log(todolists.index);
};

const addTodo = () => {
  todoData.forEach((todo) => {
    todo.index = +1;
    createTodo(todo);
  });
};

window.onload = addTodo();

/* document.getElementById('add-todo').addEventListener('click', () => {
  console.log(array[0].description);
}); */