import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class LoginWrapper extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "chuck@example.com",
            password: "Norris@1234"
        }
    }

    onFormSubmit(){
        window.alert("Please check credentials");

    }
    onUsernameChange(event){
        this.setState(
            {
                username:event.target.value
            }
        )
    }
    onPasswordChange(event){
        this.setState(
            {
                password:event.target.value
            }
        )
    }

    render() {
        const mainContent = this.props.isAuthenticated ? (
            <Redirect to='/data' />
        ): (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Enter your email</label>
                    <input id="username" value={this.state.username} onChange={this.onUsernameChange.bind(this)} name="username" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter your password</label>
                    <input id="password" value={this.state.password} onChange={this.onPasswordChange.bind(this)} name="password" className="form-control" type="password"/>
                </div>
                <div className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Log In</button>
                </div>
            </form>

        );
        return (
            <div>
                {mainContent}
            </div>


        );
    }
}



export default LoginWrapper;
