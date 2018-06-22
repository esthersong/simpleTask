import React, { Component } from 'react';
import TaskContainer from './components/TaskContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <span className="navbar-brand">SimpleTask</span>
              <span>Hello, User!</span>
            </nav>
          </div>
        </header>
        <TaskContainer />
      </div>
    );
  }
}

export default App;
