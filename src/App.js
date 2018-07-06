import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar'
import Home from './components/pages/home';
import Data from './components/pages/Data';
import Login from './components/auth/Login';

function onAuthRequired({history}) {
    history.push('/login');
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false
        };
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
        this.setState({authenticated: true});
    }
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar/>
            <div className="container">
                <Route path="/" exact={true} render={() => <Home authenticate={this.updateState} />} />
                <Route path='/login' render={() => <Login baseUrl='https://dev-541367.oktapreview.com' />} />
            </div>
            </div>
        </Router>
    );
  }
}

export default App;
