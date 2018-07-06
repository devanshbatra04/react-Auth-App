import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.isAuthenticated)

    }

    // async checkAuthentication() {
    //     const authenticated = await this.props.auth.isAuthenticated();
    //     if (authenticated !== this.state.authenticated) {
    //         this.setState({ authenticated });
    //     }
    // }
    //
    //
    //
    // async componentDidUpdate() {
    //     this.checkAuthentication();
    // }
    //
    // async login() {
    //     this.props.auth.login('/');
    // }
    //
    // async logout() {
    //     this.props.auth.logout('/');
    // }

    render() {
        // if (this.state.authenticated === null) return null;

        const mainContent = this.props.isAuthenticated ? (
                <div>
                    <p>You are logged in, You can see the data</p>
                    <button className="btn btn-large btn-primary">See Data</button>
                    <button className="btn btn-large btn-primary">Logout</button>
                </div>
            ): (
                <div>
                    <p>
                        You are not Logged in. Please Log in to see the data
                    </p>

                    <button className="btn btn-large btn-primary" >Login</button>
                    {/*onClick={this.login}*/}
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
}