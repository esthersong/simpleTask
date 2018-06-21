import * as types from '../actions/actionTypes';
const defaultState = {
  tasks: []
}
export default (state = defaultState, action) => {
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
    return {
      ...state
    }
  default:
    return state
  }
}
