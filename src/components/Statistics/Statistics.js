import  React from 'react';
import Bargraph from "../Bargraph/Bargraph.js";

class Statistics extends React.Component{

    constructor(props){
        super(props);

        this.state= {
                title:"RECORDING ACADEMY MEMBER CLASS OF 2019 STATS",
                grammyNominations:"",
                grammyWinners:"",
                gender: {
                    male:"",
                    female:"",
                    other:"",
                    notDisclose:"",
                },
                age:{
                    under39:"",
                    over40:"",
                },
                genres:{
                    pop:"",
                    rock:"",
                    jazz:"",
                    newage:"",
                    bluegrass:"",
                    folk:"",
                    reggae:"",
                    world:"",
                    theater:"",
                    classical:"",
                },
                craft:[
                   ["vocalist", "10"],
                   ["producer", "15"],
                   ["composers", "18"],
                   ["engineers", "8"],
                   ["instrumentalist", "15"],
                   ["arrangers", "10"],
                   ["artDirectors", "17"],
                   ["albumNotes", "10"],
                   ["narrators", "6"],
                   ["musicDirectors", "12"]
                ],
                ethnicity:{
                    african:"",
                    alaskan:"",
                    asian:"",
                    caucasian:"",
                    hispanic:"",
                    notDisclose:"",
                    other:"",
                },
              
         }
    }

    componentDidMount(){
        this.setState({
            data: this.props.craft,
        });
    };

    render(){
 
        return(
            <Bargraph data={this.state.craft}/>
        ) 
    }

}

export default Statistics;