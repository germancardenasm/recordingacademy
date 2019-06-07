import  React , {Component} from 'react';
import * as d3 from "d3";

class Bubblechart extends Component{

    constructor(props){
        super(props)
        this.createChart = this.createChart.bind(this);
        this.state = {
            data: [ ["39 and under", "100"], [  "40 and over", "0"]]
        }
     }

     componentDidMount() {
        this.createChart();
     }

     createChart() {
        const data = [ ["39 and under", "55"], [  "40 and over", "45"]];
        const node = this.node 
    
        let rScale = d3.scaleLinear().range([0,75]);
            rScale.domain([0,d3.max(data, (d)=>parseFloat(d[1]))]);
        let yScale= d3.scaleBand().range([0,130]).paddingInner(0.2);
            yScale.domain(data.map(data => data[0]));
        let xScale= d3.scaleBand().range([0,110]).paddingInner(0.2);
            xScale.domain(data.map(data => data[0]));
        let colorScale= d3.scaleOrdinal().range([d3.color("#1192FD"),d3.color("#08E4CC")]);
            colorScale.domain(data.map(data => data[0]));

        let svg= d3.select(node).append("g");
            
        
        const leaf = svg.selectAll("g")
            .data(this.props.data)
            .join("g")
            .attr("transform",  d =>  `translate(${xScale(d[0])+200},${yScale(d[0])+85})`)          
 
        leaf.append("circle")
            .attr("r", d => rScale(d[1]))
            .attr("fill", d=>colorScale(d[0])); 

        leaf.append("text")
            .selectAll("tspan")
            .data(d => d[1].split(/(?=[A-Z][^A-Z])/g))
            .join("tspan")
            .attr("class","value")
            .attr("x", 0)
            .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 1}em`)
            .attr("text-anchor", "middle")
            .text(d => d+"%");

        let yAxis = d3.axisRight(yScale);
            
        let yAxisG = d3.select(node).append('g').attr('className','tickNames').attr("transform", `translate( ${10} , ${55})`);
            yAxisG.call(customYAxis);   

        function customYAxis(g) {
            g.call(yAxis);
            g.select(".domain").remove();
            g.selectAll(".tick line").attr("stroke", "none");
          }
     }

 

     render(){
        return(
            <div className="bubblechart_container">  
                <div className="bubblechart_rectangle bg-color-black "><h3 className="title">AGE</h3></div>
                <svg className="bubblegraph_svg" ref={node => this.node = node} width={330} height={226}>
                </svg>
            </div>
        ) 
    }
}

export default Bubblechart;
