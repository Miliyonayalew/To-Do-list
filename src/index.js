import './style.css';
import createTodo from './modules/renderTask.js';
import add from './modules/addTask.js';
import status from './modules/clearAll.js';

window.onload = createTodo();
add();
status();
