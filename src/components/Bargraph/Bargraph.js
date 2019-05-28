import  React from 'react';
import * as d3 from "d3";

class Bargraph extends React.Component{

    constructor(props){
        super(props)
        this.createBarChart = this.createBarChart.bind(this);

        this.state={
            barHeight: 50,
        }
     }

     componentDidMount() {
        this.createBarChart();
     }

     textInBarRigthMargin(num){
         const x = parseFloat(num) >= 10 ? 25 : 15
         return x 
     }

     createBarChart() {
        const node = this.node
        let barHeight = this.state.barHeight
        let xScale = d3.scaleLinear().range([30,190]);
            xScale.domain([0,d3.max(this.props.data, (d)=>parseFloat(d[1]))]);
        let yScale= d3.scaleBand().range([0,this.props.data.length*barHeight]).paddingInner(0.2);
            yScale.domain(this.props.data.map(data => data[0]))
         
        this.setState({barHeight: yScale.bandwidth(),})   
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
        
        let barGroup= d3.select(node).append('g').attr("transform","translate(130,50)");          
        
        let individualBars = barGroup
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('g');
 
        individualBars
            .append('rect')
            .attr("fill", "url(#svgGradient)")
            .attr('y', function(d) {  return yScale(d[0]); })
            .attr('width', function(d) {  return xScale(d[1]); })
            .attr('height', yScale.bandwidth());
        
        individualBars
            .append('text')
            .attr('class', 'value')
            .attr('y', (a) => yScale(a[0]) + yScale.bandwidth() / 2)
            .attr('x', (a) => xScale(a[1])-this.textInBarRigthMargin(a[1]))
            .attr('text-anchor', 'middle')
            .text((a) => `${a[1]}%`)    

        barGroup
                .selectAll('rect')
                .data(this.props.data)
                .exit()
                .remove();
        
        var yAxis = d3.axisRight(yScale);
            
        let yAxisG = d3.select(node).append('g').attr('className','tickNames').attr("transform","translate(60,15)");
        yAxisG.call(customYAxis);   

        function customYAxis(g) {
            g.call(yAxis);
            g.select(".domain").remove();
            g.selectAll(".tick line").attr("stroke", "none");
            g.selectAll(".tick text").attr("x", 50).attr("dy", yScale.bandwidth()).attr('text-anchor',"end");
          }
     }
     
     render(){
        return(
            <div className="bargraph_container">  
                <div className="rectangle_statistics bg-color-black "><h3 className="title">GENRES</h3></div>
                <svg className="bargraph_svg" ref={node => this.node = node} width={330} height={556}>
                </svg>
            </div>
        ) 
    }
}

export default Bargraph;
