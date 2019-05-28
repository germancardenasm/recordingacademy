import  React from 'react';
import * as d3 from "d3";


class Arcchart extends React.Component{

  componentDidMount() {
    this.createChart();
  }

  createChart() {
    let data = [
    ['African American', '25' ],
    ['Alaskan Native/American Indian', '4' ],
    ['Asian American/Pacific Islander', '11' ],
    ['Caucasian', '32'],
    ['Hispanic', '15' ],
    ['Did not disclose', '5' ],
    ['Other', '7']]

    let width = 330;
    let height = 620;
    let radius = Math.min(width, height) / 2;
    const node = this.node;
    const colorArray = ["#1192FD","#08E4CC","#7544CE","#21ACBF","#5D57D9","#5FB6FF","#75E8E3"];

    let colorScale= d3.scaleOrdinal()
                    .range(colorArray.map(color => d3.rgb(color)))
                    .domain(data.map(data => data[0]));

    //Axis
    let yScale = d3.scalePoint()
                   .domain(data.map(d => d[0]))
                   .range([0 , 220]);

    let yAxis = d3.axisRight(yScale);

    let yAxisG = d3.select(node)
                   .append('g')
                   .attr('transform', 'translate(50, 50)') 
                   .call(yAxis);

        yAxisG.select(".domain").remove();
        yAxisG.selectAll(".tick line").attr("stroke", "none");
        yAxisG.selectAll(".tick text").attr("x", 30);
        
    let circleTicks = yAxisG.selectAll('cirle')
                        .append('g')
                        .data(data)
                        .enter()
                        .append('g')
                        .attr('transform' , function(d) { return 'translate('+0+', '+  yScale(d[0]) +')'} )
                        
        circleTicks.append('circle')
                    .attr("r", 15)
                    .attr('fill', d => colorScale(d));
                   
    //Pie Chart

    let svg =  d3.select(node).append("g")
                .attr('transform', 'translate(' + (radius) +
                    ',' + (height-radius) + ')');

    let arc = d3.arc()
                .outerRadius(radius*0.95)
                .innerRadius(radius*0.7);

    let pie = d3.pie()
                .value( d => d[1] )
                .sort(null);

    let path = svg.selectAll('path')
                .data(pie(data))
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', d => colorScale(d.data[0]));
    
  
            

    }

    render(){
        return(
            <div className="Arcchart_container">  
                <div className="Arcchart_rectangle bg-color-black "><h3 className="title">ETHNICITY</h3></div>
                <svg className="Arcchart_svg" ref={node => this.node = node} width={330} height={641}>
                </svg>
            </div>
        )
    }
}

export default Arcchart;
