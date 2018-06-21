import React, { Component } from 'react';
import TaskContainer from './components/TaskContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <TaskContainer />
      </div>
    );
  }
}

export default App;
