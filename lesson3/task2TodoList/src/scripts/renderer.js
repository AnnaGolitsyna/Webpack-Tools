import { getTasksList } from './tasksGateway.js';

const listElem = document.querySelector('.list');

const addAttrCheckbox = (elem, done, id) => {
  elem.setAttribute('type', 'checkbox');
  elem.classList.add('list-item__checkbox');
  elem.checked = done;
  elem.dataset.id = id;
};

const addAttrText = (elem, text) => {
  elem.classList.add('list-item__text');
  elem.textContent = text;
};

const addAttrDeleteBtn = (elem, id) => {
  elem.classList.add('list-item__delete-btn');
  elem.dataset.id = id;
};

export const creatListElem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');

  const checkbox = document.createElement('input');
  addAttrCheckbox(checkbox, done, id);
  if (done) {
    listItemElem.classList.add('list-item_done');
  }
  const textElem = document.createElement('span');
  addAttrText(textElem, text);

  const deleteBtnElem = document.createElement('button');
  addAttrDeleteBtn(deleteBtnElem, id);
  
  listItemElem.append(checkbox, textElem, deleteBtnElem);
  return listItemElem;
};

export const renderTasks = () => {
  getTasksList().then(tasksList => {
    listElem.innerHTML = '';

    const tasksElems = tasksList
      .sort((a, b) => a.done - b.done || b.time - a.time)
      .map(creatListElem);

    listElem.append(...tasksElems);
  });
};
