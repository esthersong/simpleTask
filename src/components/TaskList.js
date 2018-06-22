import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks, onAddTaskClick, onEditTaskText, onEditTaskStatus}) => (
  <div className="row">
    {tasks.map((task, index) => (
      <div key={index} className="col-md-4">
        <Task {...task} index={index} onEditTaskText={onEditTaskText} onEditTaskStatus={onEditTaskStatus}/>
      </div>
    ))}
    <div className="col-md-4" onClick={onAddTaskClick}>
      <div className="add-task-btn">
        + Add Task
      </div>
    </div>
  </div>
)

export default TaskList
