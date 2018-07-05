import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Security, SecureRoute, ImplicitCallback} from "@okta/okta-react";
import './App.css';
import Navbar from './components/layout/navbar'
import Home from './components/pages/home';
import Data from './components/pages/Data';

function onAuthRequired({history}) {
    history.push('/login');
}

class App extends Component {
  render() {
    return (
        <Router>
            <Security issuer='https://dev-541367.oktapreview.com/oauth2/default'
                      client_id='0oafo3dvriX3cGwwm0h7'
                      redirect_uri={window.location.origin + '/implicit/callback'}
                      onAuthRequired={onAuthRequired} >
          <div className="App">
            <Navbar/>
            <div className="container">
                <Route path="/" exact={true} component={Home} />
                <Route path="/data" exact={true} component={Data}/>
            </div>
            </div>
          </Security>
        </Router>
    );
  }
}

export default App;
