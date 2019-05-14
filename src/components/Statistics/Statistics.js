import  React from 'react';
import Bargraph from "../Bargraph/Bargraph.js";
import NumIndicator from "../NumIndicator/NumIndicator.js";

class Statistics extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.setState({
           data: this.props,
        });
    };

    render(){
        console.log(this.props);
        return(
            <div className="statistics">
              <Bargraph data={this.props.data.craft}/>
              <NumIndicator data={643} name={"GRAMMY NOMINATIONS"}/>
              <NumIndicator data={210} name={"GRAMMY WINNERS"}/>
            </div>

        ) 
    }

}

export default Statistics;