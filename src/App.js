import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
/* import Button from 'react-bootstrap/Button'; */
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from './img/tra.png';
import share from './img/share.svg';
import grammy from './img/GRAMMY_FinalRendering_White_01_101818_t.png';
import './App.css';


function MenuLink(props){
  return (
    <Nav.Link href={"#home"}>{props.name}</Nav.Link>
  );
}

function MenuDropDown(props){
  return (
    <NavDropdown title="MORE" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">EVENTS</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">PRESS ROOM</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">JOBS</NavDropdown.Item>
    </NavDropdown>
  );
}

function NavBar(){
  return(
       <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Brand href="#home"><Image src={logo}/></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <MenuLink name={"GRAMMYS"} />
                <MenuLink name={"LATIN GRAMMYs"} />
                <MenuLink name={"GRAMMY MUSEUM"} />
                <MenuLink name={"ADVOCACY"} />
                <MenuLink name={"MEMBERSHIP"} />
                <MenuLink name={"GOVERNANCE"} />
                <MenuDropDown />
                <MenuLink name={"STAY CONNECTED"} />
              </Nav>
            </Navbar.Collapse>
            <Nav.Link href={"#face"} id="navbar-icon"><Image src={share} className="navbar-icon"/></Nav.Link>
        </Navbar>
  )
}

function App() {
  return (
    <div>

      <Container className="bg-color-gray">
        <NavBar />

        <div className="header">
          <div className="rectangle bg-color-gradient mr-right mr-top middle"></div>
          <div className="rectangle bg-color-black mr-left top main-content" >
            <h1 className="main-content-text title">Recording Academy</h1>
            <h2 className="tx-color-gradient main-title">Member class of 
                <span className="block huge">2019</span>
            </h2>
            <p className="main-content-text">The Recording Academy is proud  to announce its membership 
              class of 2019. As music’s preeminent membership organization for performers, songwriters, 
              producers, and engineers, members work together to build a better and more inspiring world 
              for music and its makers. 
            </p>
            <p className="main-content-text">
            This class was selected by a committee of industry peers based on exceptional contributions 
            to the music community.
            </p>
            <div nameClass="social-icons">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <Image className="grammy-img" src={grammy} fluid/>
        </div>
    

        </Container>

    </div>
  );
}

export default App;
