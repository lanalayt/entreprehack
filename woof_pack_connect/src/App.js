import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Card from './components/Card.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Card /> 
      </div>
    );
  }
}

export default App;
