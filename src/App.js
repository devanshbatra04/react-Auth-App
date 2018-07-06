import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar'
import Home from './components/pages/home';
import Data from './components/pages/Data';
import Login from './components/auth/newLogin';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        };
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
        console.log(this)
        const curr = this.state.isAuthenticated;
        this.setState({isAuthenticated: !curr });
    }
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar/>
                <div className="container">
                    <Route path="/" exact={true} render={() => <Home  update={this.updateState} isAuthenticated={this.state.isAuthenticated} />} />
                    <Route path="/data" exact={true} render={() => <Data isAuthenticated={this.state.isAuthenticated} />} />
                    <Route path='/login' render={() => <Login isAuthenticated={this.state.isAuthenticated} update={this.updateState}  /> }/>
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
