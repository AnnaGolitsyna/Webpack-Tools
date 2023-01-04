import { initTodoHandlers } from './list/todoList.js';
import { renderTasks } from './list/renderer.js';
import { getTasksList } from './list/tasksGateway.js';
import './index.scss';


document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(() => renderTasks());

  initTodoHandlers();
});



