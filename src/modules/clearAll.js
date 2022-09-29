import { todoData } from './arrayObject.js';
import Store from './Store.js';

const status = () => {
  const checked = document.querySelectorAll('input[type=checkbox]');
  const mylist = document.querySelectorAll('#mylist');
  checked.forEach((input, index) => input.addEventListener('change', () => {
    if (input.checked) {
      todoData[index].completed = true;
      mylist[index].style.textDecoration = 'line-through';
      mylist[index].style.color = 'grey';
    } else {
      todoData[index].completed = false;
      mylist[index].style.textDecoration = 'none';
      mylist[index].style.color = 'black';
    }
    Store(todoData);
  }));
};

export default status;