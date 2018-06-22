import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditButtons: false,
      showEditText: false,
      text: ""
    };
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  showEditButtons = () => {
    if (!this.state.showEditText) {
      this.setState({
        showEditButtons: true
      });
    }
  }
  hideEditButtons = () => {
    this.setState({
      showEditButtons: false
    });
  }
  editStatus = () => {
    this.props.onEditTaskStatus(this.props.index, !this.props.completed)
  }
  editText = () => {
    this.setState({
      showEditText: true,
      showEditButtons: false
    })
  }
  submitTaskText = (e) => {
    e.preventDefault();
    this.props.onEditTaskText(this.props.index, this.state.text);
    this.setState({
      showEditText: false,
      showEditButtons: false
    })
  }
  render(){
    return (
      <div className="task" onMouseEnter={this.showEditButtons} onMouseLeave={this.hideEditButtons}>
        <div className="task-content task-details">
          <p className="task-text">{this.props.text === "" ? "Task" : this.props.text}</p>
          <p className="task-status" style={{color: this.props.completed ? '#35c675' : '#a5bbc7'}}>{this.props.completed ? "Completed" : "Active"}</p>
        </div>
        <div className={"task-content overlay-task-box task-edit-btns " + (this.state.showEditButtons ? 'show' : 'hidden')}>
          <div style={{color: this.props.completed ? "#f0684f" : "#35c675"}}><p onClick={this.editStatus}>{this.props.completed ? "Undo" : "Complete"}</p></div>
          <div><p className="edit-btn" onClick={this.editText}>Edit</p></div>
        </div>
        <div className="task-content task-edit-text overlay-task-box" style={{display: this.state.showEditText ? 'block' : 'none'}}>
          <form onSubmit={this.submitTaskText}>
            <input className="col-9" maxLength="28" type="text" placeholder="Edit task name..." value={this.state.text} onChange={this.handleChange}/>
            <button className="col-3" type="submit">Save</button>
          </form>
        </div>
      </div>
    )
  }
}

Task.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onEditTaskStatus: PropTypes.func.isRequired
}
// function mapStateToProps(state, props) {
//   return {
//
//   };
// }
// const mapDispatchToProps = {
//   onEditTaskText: taskActions.editTaskText
// }

export default Task;
