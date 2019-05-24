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
 /*    <h3 className="title section-main-title"> Recording Academy Member Class Of 2019 Stats</h3>
    <NumIndicator data={643} name={"GRAMMY NOMINATIONS"}/>
    <NumIndicator data={210} name={"GRAMMY WINNERS"}/> 
    <Bargraph data={this.props.data.genres}/>
    <Bargraph data={this.props.data.craft}/> 
    <Bubblechart /> */

    render(){
        return(
            <div className="statistics">
          
                <Arcchart />
            </div>

        ) 
    }

}

export default Statistics;