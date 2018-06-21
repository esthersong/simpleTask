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
  return {
    type: types.EDIT_TASK_TEXT,
    index: index,
    text: text
  }
}
export const editTaskStatus = (index, status) => {
  return {
    type: types.EDIT_TASK_STATUS,
    index: index,
    status: status
  }
}
