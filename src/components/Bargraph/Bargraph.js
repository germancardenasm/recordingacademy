
import  React from 'react';
import * as d3 from "d3";

class Bargraph extends React.Component{

    constructor(props){
        super(props)
        this.createBarChart = this.createBarChart.bind(this);
     }

     componentDidMount() {
        this.createBarChart()
     }

     createBarChart() {
        const node = this.node
        let barHeight = 46;
        let xScale = d3.scaleLinear().range([0,153]);
            xScale.domain([0,d3.max(this.props.data, (d)=>parseFloat(d[1]))]);
        let yScale= d3.scaleBand().range([0,this.props.data.length*46]);
            yScale.domain(this.props.data.map(data => data[0]))
    
        let defs = d3.select(node).append('defs');
        
        let gradient = defs.append("linearGradient")
                    .attr("id", "svgGradient")
                    .attr("x1", "0%")
                    .attr("x2", "100%")
                    .attr("y1", "0%")
                    .attr("y2", "0%");

        gradient.append('stop')
                    .attr('class', 'start')
                    .attr("offset", "0%")   
                    .attr("stop-color", "#08E4CC")
                    .attr("stop-opacity", 1);            
    
        gradient.append("stop")
                    .attr('class', 'end')
                    .attr("offset", "100%")
                    .attr("stop-color", "#1192FD")
                    .attr("stop-opacity", 1);
        
        let barGroup= d3.select(node).append('g');          
        
        barGroup
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect');
 
        barGroup
            .selectAll('rect')
            .data(this.props.data)
            .attr("fill", "url(#svgGradient)")
            .attr('width', function(d) {  return xScale(d[1]); })
            .attr('height', barHeight - 10)
            .attr('transform', function(d, i){
                                return "translate(0," + (i * barHeight) + ")"});
                                       
        barGroup
        .selectAll('rect')
        .data(this.props.data)
        .exit()
        .remove();
        
        var yAxis = d3.axisRight(yScale)
            .tickSize(50);
            
        let yAxisG = d3.select(node).append('g');
        yAxisG.call(customYAxis);   

        function customYAxis(g) {
            g.call(yAxis);
            g.select(".domain").remove();
            g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#777").attr("stroke-dasharray", "2,2");
            g.selectAll(".tick text").attr("x", 0).attr("dy", 46);
          }

     }
     
     render(){
        return(
            <div>  
                <svg ref={node => this.node = node} width={700} height={700}>
                </svg>
            </div>
        ) 
    }
}

export default Bargraph;
