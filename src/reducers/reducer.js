import * as types from '../actions/actionTypes';
const defaultState = {
  tasks: []
}
export default (state = defaultState, action) => {
  let tasks = [...state.tasks];
 switch (action.type) {
  case 'ADD_TASK':
   return {
     ...state,
     tasks: [...state.tasks,
       {
         id: action.id,
         text: action.text,
         completed: action.completed
       }
     ]
   }
  case 'EDIT_TASK_TEXT':
    tasks[action.index]['text'] = action.text;
    return {
      ...state,
      tasks: [
        ...tasks
      ]
    }
  case 'EDIT_TASK_STATUS':
    tasks[action.index]['completed'] = action.status;
    return {
      ...state,
      tasks: [
        ...tasks
      ]
    }
  default:
    return state
  }
}
