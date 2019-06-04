import  React from 'react';
import Bargraph from '../Bargraph/Bargraph.js';
import NumIndicator from '../NumIndicator/NumIndicator.js';
import Bubblechart from '../Bubblechart/Bubblechart.js';
import Arcchart from '../Arcchart/Arcchart.js';


class Statistics extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
      let props = this.props;
        return(
          <div className="statistics">
            <h3 className="title section-main-title">{props.data.title}</h3>
            <div className='charts-containter'>
              <NumIndicator data={props.data.grammyNominations} name={"GRAMMY NOMINATIONS"}/>
              <NumIndicator data={props.data.grammyWinners} name={"GRAMMY WINNERS"}/> 
              <Bubblechart data={props.data.age}/> 
              <Bubblechart data={props.data.age}/> 
              <Bargraph title='GENRES' data={props.data.genres}/>
              <Bargraph title='CRAFT' data={props.data.craft}/> 
              <Arcchart title='ETHNICITY' data={props.data.ethnicity}/>
            </div>
          </div>

        ) 
    }

}

export default Statistics;