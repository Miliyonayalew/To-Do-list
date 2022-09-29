import './style.css';
import { createTodo } from './modules/renderTask.js';
import add from './modules/addTask.js';

window.onload = createTodo();
add();
