import React, {Component} from 'react';

class MyComponent extends Component {
    state = {
        currentUserName: '',
        currentUserEmail:''
    };
    componentDidMount(){
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserName: idToken.idToken.claims.name,
            currentUserEmail: idToken.idToken.claims.email

        })
    }
    render() {
        const { currentUserName, currentUserEmail } = this.state;
        return (
            <div>
                <h3> Welcome {currentUserName} </h3>
                <p>Email: {currentUserEmail}</p>
            </div>
        );
    }
}


export default MyComponent;
