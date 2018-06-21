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
    let countTasks, tasksCount, tasksBanner;
    if (this.props.tasks.length > 0) {
      countTasks = this.props.tasks.filter(task => !task.completed);
      tasksCount = countTasks.length;
    } else {
      tasksCount = -1;
    }
    if(tasksCount === 0) {
      tasksBanner = <div><h3>All tasks completed</h3> <p>Well done!</p></div>
    } else if (tasksCount === -1) {
      tasksBanner = <div><h3>You have no tasks</h3><p>Add tasks to complete</p></div>;
    } else {
      tasksBanner = <div><h3>Complete all tasks</h3> <p>You have {tasksCount} active tasks</p></div>
    }
    return(
      <div>
        <div>{tasksBanner}</div>
        <TaskList tasks={this.props.tasks} onAddTaskClick={this.props.onAddTaskClick} onEditTaskText={this.props.onEditTaskText}/>
      </div>
    )
  }
}

TaskContainer.propTypes = {
  tasks: PropTypes.array.isRequired
  // actions: PropTypes.object.isRequired
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
  onAddTaskClick: taskActions.addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
