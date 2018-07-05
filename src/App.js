import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/navbar'
import Home from './components/pages/home';
import Data from './components/pages/Data';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar/>
            <div className="container">
                <Route path="/" exact={true} component={Home} />
                <Route path="/data" exact={true} component={Data}/>
            </div>
            </div>
        </Router>
    );
  }
}

export default App;
