import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskList from './TaskList';
import * as taskActions from '../actions/actions';

class TaskContainer extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    console.log('tasks: ', this.props.tasks);
    let countTasks, tasksCount, tasksBanner;
    if (this.props.tasks.length > 0) {
      countTasks = this.props.tasks.filter(task => !task.completed);
      tasksCount = countTasks.length;
    } else {
      tasksCount = -1;
    }
    if(tasksCount === 0) {
      tasksBanner = <div className="col-12"><div className="banner banner-green"><h3>All tasks completed</h3> <p>Well done!</p></div></div>
    } else if (tasksCount === -1) {
      tasksBanner = <div className="col-12"><div className="banner banner-blue"><h3>You have no tasks</h3><p>Add tasks to complete</p></div></div>
    } else {
      tasksBanner = <div className="col-12"><div className="banner banner-blue"><h3>Complete all tasks</h3> <p>You have {tasksCount} active tasks</p></div></div>
    }
    return(
      <div className="task-container">
        <div className="container">
          <div className="tasks-content">
            <h1>Your tasks</h1>
            <div className="row">{tasksBanner}</div>
            <TaskList tasks={this.props.tasks} onAddTaskClick={this.props.onAddTaskClick} onEditTaskText={this.props.onEditTaskText} onEditTaskStatus={this.props.onEditTaskStatus}/>
          </div>
        </div>
      </div>
    )
  }
}

TaskContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  onAddTaskClick: PropTypes.func.isRequired,
  onEditTaskText: PropTypes.func.isRequired,
  onEditTaskStatus: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
  return {
    tasks: state.taskReducer.tasks
  };
}
//This approach of dispatching to props is a more standard approach. Other ways such
//as using bindActionCreators is a way to do some extra code (such as calculations or checks) before dispatching the action
//but I would just do the extra checks in the action after dispatching like in the addTask() in actions.js
const mapDispatchToProps = {
  onAddTaskClick: taskActions.addTask,
  onEditTaskText: taskActions.editTaskText,
  onEditTaskStatus: taskActions.editTaskStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
