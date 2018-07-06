import React, {Component} from 'react';
import Graph from "../visualisation/Graph";
import {Redirect} from 'react-router-dom'

class MyComponent extends Component {

    componentDidMount(){
        // const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        // this.setState({
        //     currentUserName: idToken.idToken.claims.name,
        //     currentUserEmail: idToken.idToken.claims.email
        //
        // })
    }
    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to='/login' />
        }
        // const { currentUserName, currentUserEmail } = this.state;
        return (
            <div>
                <div>
                    {/*<h3> Welcome {currentUserName} </h3>*/}
                    {/*<p>Email: {currentUserEmail}</p>*/}
                </div>
                <div>
                    <Graph url="abc.com" />
                </div>
            </div>

        );
    }
}


export default MyComponent;
