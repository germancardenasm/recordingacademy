import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../NavBar/NavBar.js';
import dataFromServer from '../../data/data.js';
import artistsListFromServer from '../../data/artistsList.js';
import Header from '../Header/Header.js';
import Slider from '../Slider/Slider.js';
import Membership from "../Membership/Membership.js";
import Statistics from "../Statistics/Statistics.js";
import NameList from '../NameList/NameList.js';
import Footer from '../Footer/Footer.js';


class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data: dataFromServer,
            artistList: artistsListFromServer.nominee,
         }
  }
  
    componentDidMount(){
      console.log('Home page didMount()');
    };

    render(){
      let data = this.state.data;
      let artist = this.state.artistList;
        return(
            <Container className="homepage container-fluid"> 
              <NavBar className="navbar-expand" />
              <Header data={data.headerData}/>
              <Slider data={data.sliderData}/>   
              <Membership data={data.membershipData}/>
              <Statistics data={data.statistics}/>
              <NameList listOfArtists={artist}/>
              <Footer />
            </Container>
        )
    }
  }

export default Homepage;

