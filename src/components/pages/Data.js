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
        return (
            <div>

            </div>
        );
    }
}


export default MyComponent;
