import React from "react";
import '../styles/Feed.css';
import box from "../images/add_24px_outlined.svg";
import SearchBar from "../components/SearchBar";
import {Col, Container, Nav, Navbar, NavLink, Row} from "react-bootstrap";
import rectangle from "../images/rectangle.png";



class Feed extends React.Component {
    render() {
        return (
          <div>
            <Navbar>
              <Container fluid className="navbar-container">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav>
                  <NavLink>Create an outfit</NavLink>
                  <img src={box}/> 
                </Nav>
              </Container>
            </Navbar>
            <h1>Corderoy</h1>
            <SearchBar/>
            <div>Trending</div>
            <img src={rectangle} alt="clothes"/> 
            <img src={rectangle} alt="clothes"/> 
            <img src={rectangle} alt="clothes"/> 
          </div> 
        );
    }
}

export default Feed;