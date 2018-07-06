import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class LoginWrapper extends Component {
    onFormSubmit(){

    }

    render() {
        const mainContent = this.props.isAuthenticated ? (
            <Redirect to='/data' />
        ): (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Enter your email</label>
                    <input id="username" value="chuck@example.com" name="username" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter your password</label>
                    <input id="password" value="Norris@1234" name="password" className="form-control" type="password"/>
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
