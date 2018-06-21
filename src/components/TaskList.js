import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks, onAddTaskClick, onEditTaskText}) => (
  <div className="Container">
    <div className="row">
        {tasks.map((task, index) => (
          <div key={index} className="col-md-4">
            <Task {...task} text={task.text} completed={task.completed} index={task.index}/>
          </div>
        ))}
      <div className="col-md-4" onClick={onAddTaskClick}>
        <div className="add-task-btn">
          + Add Task
        </div>
      </div>
    </div>
  </div>
)

export default TaskList
