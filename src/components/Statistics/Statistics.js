import  React from 'react';
import Bargraph from '../Bargraph/Bargraph.js';
import NumIndicator from '../NumIndicator/NumIndicator.js';
import Bubblechart from '../Bubblechart/Bubblechart.js';
import Arcchart from '../Arcchart/Arcchart.js';


class Statistics extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.setState({
           data: this.props,
        });
    };
 /**/

    render(){
        return(
          <div className="statistics">
            <h3 className="title section-main-title"> Recording Academy Member Class Of 2019 Stats</h3>
            <div className='charts-containter'>
              <NumIndicator data={643} name={"GRAMMY NOMINATIONS"}/>
              <NumIndicator data={210} name={"GRAMMY WINNERS"}/> 
              <Bubblechart /> 
              <Bubblechart /> 
              <Bargraph data={this.props.data.genres}/>
              <Bargraph data={this.props.data.craft}/> 
              <Arcchart />
            </div>
          </div>

        ) 
    }

}

export default Statistics;