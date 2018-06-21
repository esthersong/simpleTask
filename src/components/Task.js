import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as taskActions from '../actions/actions';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditButtons: false,
      showEditText: false
    };
  }
  showEditButtons = () => {
    this.setState({
      showEditButtons: true
    });
  }
  hideEditButtons = () => {
    this.setState({
      showEditButtons: false
    });
  }
  editText = () => {
    console.log('show edit box')
    this.setState({
      showEditText: true,
      showEditButtons: false
    })
  }
  submitTaskText = (e) => {
    console.log('clicked');
    e.preventDefault();
    return this.props.onEditTaskText(this.props.index, e.target.value);
  }
  render(){
    return (
      <div className="task" onMouseEnter={this.showEditButtons} onMouseLeave={this.hideEditButtons}>
        <div className="task-content task-details">
          <p>{this.props.text}</p>
          <p className="task-status" style={{color: this.props.completed ? 'green' : 'gray'}}>{this.props.completed ? "Completed" : "Active"}</p>
        </div>
        <div className={"task-content overlay-task-box task-edit-btns " + (this.state.showEditButtons ? 'show' : 'hidden')}>
          <div style={{color: this.props.completed ? "red" : "green"}}><p>{this.props.completed ? "Undo" : "Complete"}</p></div>
          <div><p onClick={this.editText}>Edit</p></div>
        </div>
        <div className="task-content task-edit-text overlay-task-box" style={{display: this.state.showEditText ? 'block' : 'none'}}>
          <form onSubmit={this.submitTaskText}>
            <input type="text"/>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    )
  }
}

Task.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
const mapDispatchToProps = {
  onEditTaskText: taskActions.editTaskText
}

export default connect(null, mapDispatchToProps)(Task);
