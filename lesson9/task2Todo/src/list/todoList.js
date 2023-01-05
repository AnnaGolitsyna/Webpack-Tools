import { createNewTask } from './createTask';
import { onListClick } from './updateTask';

export const initTodoHandlers = () => {
  const btnElem = document.querySelector('.create-task-btn');
  btnElem.addEventListener('click', createNewTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
};
