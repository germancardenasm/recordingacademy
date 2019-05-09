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