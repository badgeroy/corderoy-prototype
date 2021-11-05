import '../styles/Wardrobe.css';
import React from "react";
import {Col, Container, Nav, Navbar, NavLink, Row} from "react-bootstrap";


class Wardrobe extends React.Component {
    render() {
        return (
          <div className="Wardrobe">
            <Navbar>
              <Container fluid className="navbar-container">
                <Navbar.Brand href="#home">Corderoy</Navbar.Brand>
                <Nav>
                  <NavLink>Jackets</NavLink>
                  <NavLink>Coats</NavLink>
                  <NavLink>Jeans</NavLink>
                  <NavLink>Pants & Leggings</NavLink>
                  <NavLink>Shorts</NavLink>
                  <NavLink>Skirts</NavLink>
                  <NavLink>Sweaters & Knits</NavLink>
                  <NavLink>Tops</NavLink>
                  <NavLink>Boots</NavLink>
                  <NavLink>Flats</NavLink>
                  <NavLink>Mules & Slides</NavLink>
                  <NavLink>Pumps</NavLink>
                  <NavLink>Sandals</NavLink>
                  <NavLink>Sneakers</NavLink>
                  <NavLink>Backpacks</NavLink>
                  <NavLink>Clutches</NavLink>
                  <NavLink>Cross Body Bags</NavLink>
                  <NavLink>Satchels & Top Handles</NavLink>
                  <NavLink>Shoulder Bags</NavLink>
                  <NavLink>Totes</NavLink>
                  <NavLink>Hats</NavLink>
                  <NavLink>Scarves & Wraps</NavLink>
                  <NavLink>Sunglasses & Eyewear</NavLink>
                </Nav>
              </Container>
            </Navbar>
          </div>
        );
    }
}

export default Wardrobe;