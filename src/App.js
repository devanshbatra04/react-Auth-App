import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/navbar'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar/>
            <h1>Hello</h1>

          </div>
        </Router>
    );
  }
}

export default App;
