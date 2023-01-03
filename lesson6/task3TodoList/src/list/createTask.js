import { renderTasks } from './renderer.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const createNewTask = () => {
  const inputTextElem = document.querySelector('.task-input');

  const text = inputTextElem.value;

  if (!text) return;

  inputTextElem.value = '';

  const newTask = {
    text,
    done: false,
    time: Date.now(),
  };

  
  createTask(newTask)
    .then(() => getTasksList())
    .then(() => renderTasks());
};
