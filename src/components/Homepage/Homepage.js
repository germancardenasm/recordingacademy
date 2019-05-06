import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../NavBar/NavBar.js';
import headerData from '../../data/data.js';
import Header from '../Header/Header.js';
import Slider from '../Slider/Slider.js';

let loadedData = headerData;

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data:{}, 
        }
    }
  
    componentDidMount(){
        this.setState({
            data: loadedData,
        })
    };
     
    render(){
  
        return(
          <div>
            <Container>
              <NavBar className="navbar-expand" />
              <Header data={this.state.data}/>
              <Slider />
            </Container>
          </div>
        )
    }
  }

export default Homepage;