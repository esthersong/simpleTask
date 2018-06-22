import React, { Component } from 'react';
import TaskContainer from './components/TaskContainer';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <span className="navbar-brand">SimpleTask</span>
              <span className="nav-username">Hello, User!</span>
            </nav>
          </div>
        </div>
        <TaskContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
