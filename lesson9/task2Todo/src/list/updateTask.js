import { renderTasks } from './renderer';
import { getTasksList, updateTask, deleteTask } from './tasksGateway';

// 1. create f onListClick
// input - event.target
// 2. if click isCheckbox => changeClassDone
// 3. if click list-item__delete-btn => deleteTask(taskGateway)
// 4. write data to server
// 5. read data
// 6. set local-storage
// 7. render

const changeClassDone = (taskId, target) => {
  target.closest('.list-item').classList.toggle('list-item_done');
  const done = target.checked;

  getTasksList().then((tasksList) => {
    const { text } = tasksList.find((task) => task.id === taskId);

    const updatedTask = {
      text,
      time: Date.now(),
      done,
    };

    updateTask(taskId, updatedTask).then(() => renderTasks());
  });
};

const deletedTask = (taskId) => {
  deleteTask(taskId).then(() => renderTasks());
};

export const onListClick = ({ target }) => {
  const isCheckbox = target.classList.contains('list-item__checkbox');
  const isDeleteBtn = target.classList.contains('list-item__delete-btn');
  const taskId = target.dataset.id;

  if (!isCheckbox && !isDeleteBtn) {
    return;
  }

  isCheckbox ? changeClassDone(taskId, target) : deletedTask(taskId);
};
