import React, {Component} from 'react';
import axios from 'axios';

class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        axios.get(`http://www.reddit.com/r/reactjs.json`)
            .then(res =>{
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
                console.log(posts);
            })
    }

    render() {
        return (
            <div>
                {this.props.url}
            </div>
        );
    }
}


export default Graph;
