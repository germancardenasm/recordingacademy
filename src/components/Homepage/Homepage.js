import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../NavBar/NavBar.js';
import data from '../../data/data.js';
import Header from '../Header/Header.js';
import Slider from '../Slider/Slider.js';
import Membership from "../Membership/Membership.js";
import Statistics from "../Statistics/Statistics.js";

let loadedData = data;

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data:{
              headerData: {
                headerFistLine: "",
                headerTitle:  "",
                headerTitleYear: "",
                headerTextContent: "",
                },
                sliderData: {
                  1: {
                    quote: "",
                    actorName: "",
                    grammyWins: "",
                    grammyNominations: "",
                  },
                },
                membershipData:{
                    title: "",
                    textContent: "", 
                }, 
                statistics:{
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
                      ["Instrumentalist", "15"],
                      ["Vocalist", "23"],
                      ["Producer", "6"],
                      ["Song Writers", "14"],
                      ["Engineers", "19"],
                      ["Arrangers", "7"],
                      ["Art Directors", "11"],
                      ["Album Notes", "13"],
                      ["Narrators", "0"],
                      ["Music Directors", "1"]
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
         }
  }
  
    componentDidMount(){
        this.setState({
            data: loadedData,
        });
    };
     
    render(){
  
        return(
          <div>
            <Container className="container-fluid">
              <NavBar className="navbar-expand" />
              <Header data={this.state.data.headerData}/>
              <Slider data={this.state.data.sliderData}/>
              <Membership data={this.state.data.membershipData}/>
              <Statistics data={this.state.data.statistics}/>
            </Container>
          </div>
        )
    }
  }

export default Homepage;