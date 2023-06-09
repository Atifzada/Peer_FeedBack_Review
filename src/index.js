import './style.css';
import {
  renderList, addToList, editTask, removeTask,
} from './modules/taskFunction.js';
import { checkedTask, completedTasks } from './modules/taskUpdate.js';

const tasksList = document.getElementById('myTasksList');
const newTask = document.getElementById('input');
const submit = document.getElementById('submit');

/* Add To List */
newTask.addEventListener('keypress', (e) => {
  addToList(e);
});

/* Add to List (clicked) */
submit.addEventListener('click', () => {
  addToList('clicked');
});

/* Edit Task */
tasksList.addEventListener('keypress', (event) => {
  const taskToEdit = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  const index = li.id;
  if (taskToEdit === 'edit') {
    editTask(index, event);
  }
});

/* Delete Task */
tasksList.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'deleteTask') {
    removeTask(li.index);
    event.target.parentElement.remove();
  }
  if (clickedItem === 'checked') {
    checkedTask({ index: li.id, status: false });
  }
  if (clickedItem === 'unchecked') {
    checkedTask({ index: li.id, status: true });
  }
});

const removeBtn = document.getElementById('remove');
removeBtn.addEventListener('click', () => {
  completedTasks();
});

document.addEventListener('DOMContentLoaded', renderList());