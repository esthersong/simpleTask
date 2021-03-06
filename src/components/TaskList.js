import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks, onAddTaskClick, onEditTaskText, onEditTaskStatus}) => (
  <div className="row">
      {tasks.map((task, index) => (
        <div key={index} className="col-lg-4 col-sm-6">
          <Task {...task} index={index} onEditTaskText={onEditTaskText} onEditTaskStatus={onEditTaskStatus}/>
        </div>
      ))}
    <div className="col-lg-4 col-sm-6" onClick={onAddTaskClick}>
      <div className="add-task-btn">
        + Add Task
      </div>
    </div>
  </div>
)

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onAddTaskClick: PropTypes.func.isRequired,
  onEditTaskText: PropTypes.func.isRequired,
  onEditTaskStatus: PropTypes.func.isRequired
};

export default TaskList
