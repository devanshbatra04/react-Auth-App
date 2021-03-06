import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    async login() {
        this.props.auth.login('/');
    }

    async logout() {
        this.props.auth.logout('/');
    }

    render() {
        if (this.state.authenticated === null) return null;

        const mainContent = this.state.authenticated ? (
                <div>
                    <p>data</p>
                    <button className="btn btn-large btn-primary" onClick={this.logout}>Logout</button>
                </div>
            ): (
                <div>
                    <p>
                        You are not Logged in. Please Log in to see the data
                    </p>

                    <button className="btn btn-large btn-primary" onClick={this.login}>Login</button>

                </div>
            );

        // return (
        //     <div>
        //         <Link to='/'>Home</Link><br/>
        //         <Link to='/protected'>Protected</Link><br/>
        //         {button}
        //     </div>

        return (
            <div className="jumbotron">
                <h1 className="display-4"> Welcome to Data Portal </h1>
                {mainContent}

            </div>
        );
    }
});