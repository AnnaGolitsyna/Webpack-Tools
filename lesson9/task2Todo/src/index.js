import { initTodoHandlers } from './list/todoList';
import { renderTasks } from './list/renderer';
import { getTasksList } from './list/tasksGateway';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(() => renderTasks());

  initTodoHandlers();
});
