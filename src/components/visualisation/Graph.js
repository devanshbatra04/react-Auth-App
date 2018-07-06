import React, {Component} from 'react';
import axios from 'axios';
import * as d3 from 'd3';

class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            posts2:[]
        };
    }

    componentDidMount(){
        axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?start_date=2017-03-27&api_key=wzN4rh3biaLFaksci2K4`)
            .then(res =>{

                // const posts = res.data.data.children.map(obj => obj.data);
                // this.setState({ posts });
                const posts = res.data.dataset.data.map(obj => {
                    return {
                        date: new Date(obj[0]),
                        value: obj[4]
                    }
                });
                this.setState({posts});
                console.log(this.state.posts);
            }).then( () => {
                    axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/FB.json?start_date=2017-03-27&api_key=wzN4rh3biaLFaksci2K4`)
                    .then(res =>{

                        // const posts = res.data.data.children.map(obj => obj.data);
                        // this.setState({ posts });
                        const posts2 = res.data.dataset.data.map(obj => {
                            return {
                                date: new Date(obj[0]),
                                value: obj[4]
                            }
                        });
                        this.setState({posts2});
                        console.log(this.state.posts2);
                        this.drawChart(this.state.posts, this.state.posts2);
                    })
                }
        )

    }
    drawChart(data, data2) {
        var svgWidth = 600, svgHeight = 400;
        var margin = {top: 20, right: 20, bottom: 30, left: 50};
        var width = svgWidth - margin.left - margin.right;
        var height = svgHeight - margin.top - margin.bottom;
        var svg = d3.select('svg')
            .attr("width", svgWidth)
            .attr("height", svgHeight);
        var g = svg.append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")"
            );
        var x = d3.scaleTime().rangeRound([0, width]);
        var y = d3.scaleLinear().rangeRound([height, 0]);
        var line = d3.line()
            .x(function(d) { return x(d.date)})
            .y(function(d) { return y(d.value)});
        x.domain(d3.extent(data, function(d) { return d.date }));
        y.domain(d3.extent(data, function(d) { return d.value }));
        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .select(".domain")
            .remove();
        g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Price ($)");
        g.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);
        g.append("path")
            .datum(data2)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line);

    }

    render() {
        return (
            <div>
                <svg className="line-chart"></svg>
                <p>The Red curve denotes FB stock and the blue curve denotes Apple's stock over one year</p>
                <p> Data was fetched from Quandl API</p>
            </div>
        );
    }
}


export default Graph;
