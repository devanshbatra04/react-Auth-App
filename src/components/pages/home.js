import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.isAuthenticated)

    }

    render() {
        console.log(this.props.appState)
        // if (this.state.authenticated === null) return null;

        const mainContent = this.props.isAuthenticated ? (
                <div>
                    <p>You are logged in, You can see the data</p>
                    <Link to="/data" className="btn btn-large btn-primary">See Data</Link>{' '}
                    <button className="btn btn-large btn-primary" onClick={() => {
                            this.props.update();
                        }
                    }>Logout</button>
                </div>
            ): (
                <div>
                    <p>
                        You are not Logged in. Please Log in to see the data
                    </p>

                    <button className="btn btn-large btn-primary">Login</button>
                    {/*onClick={this.login}*/}
                </div>
            );


        return (
            <div className="jumbotron">
                <h1 className="display-4"> Welcome to Data Portal </h1>
                {mainContent}

            </div>
        );
    }
}