import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import logo from '../../img/tra.png';
import share from '../../img/share.svg';

function NavBar(){
  return(

      <div className="grammyNavBar">
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
        </div>
  )
}

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
  
export default NavBar;