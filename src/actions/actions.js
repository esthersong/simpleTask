import * as types from './actionTypes';
let todoId = 0;
export const addTask = () => {
  return {
    type: types.ADD_TASK,
    id: todoId++,
    text: "New Task",
    completed: false
  };
}
export const editTaskText = (index, text) => {
  console.log('edit task');
  return {
    type: types.EDIT_TASK_TEXT
  }
}
