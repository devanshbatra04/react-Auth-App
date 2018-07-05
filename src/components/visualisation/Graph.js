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
        axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?start_date=2017-03-27`)
            .then(res =>{

                // const posts = res.data.data.children.map(obj => obj.data);
                // this.setState({ posts });
                const posts = res.data.dataset.data.map(obj => {
                    return {
                        date: obj[0],
                        value: obj[4]
                    }
                });
                console.log(res.data.dataset);
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
