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
                this.setState({posts});
                console.log(this.state.posts)
                this.drawChart(this.state.posts);
            })

    }
    drawChart(data) {
        // var svgWidth = 600, svgHeight = 400;
        // var margin = {top: 20, right: 20, bottom: 30, left: 50};
        // var width = svgWidth - margin.left - margin.right;
        // var height = svgHeight - margin.top - margin.bottom;
        // var svg = d3.select('svg')
        //     .attr("width", svgWidth)
        //     .attr("height", svgHeight);
        console.log(this.state)
    }

    render() {
        return (
            <div>
                {this.props.url}
                <svg></svg>
            </div>
        );
    }
}


export default Graph;
