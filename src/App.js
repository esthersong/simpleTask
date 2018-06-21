import React, { Component } from 'react';
import TaskContainer from './components/TaskContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TaskContainer />
      </div>
    );
  }
}

export default App;
