import '../styles/Wardrobe.css';
import React from "react";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Catalog from "../components/Catalog";


const categories = {
  "jackets": "Jackets",
  "coats": "Coats",
  "jeans": "Jeans",
  "pants": "Pants & Leggings",
  "shorts": "Shorts",
  "skirts": "Skirts",
  "sweaters-knits": "Sweaters & Knits",
  "tops": "Tops",
  "boots": "Boots",
  "flats": "Flats",
  "mules": "Mules & Slides",
  "pumps": "Pumps",
  "sandals": "Sandals",
  "sneakers": "Sneakers",
  "backpacks": "Backpacks",
  "clutches": "Clutches",
  "cross": "Cross Body Bags",
  "satchels": "Satchels & Top Handles",
  "shoulders": "Shoulder Bags",
  "totes": "Totes",
  "hats": "Hats",
  "scarves": "Scarves & Wraps",
  "sunglasses": "Sunglasses & Eyewear",
};


class Wardrobe extends React.Component {
    render() {
        return (
          <div className="Wardrobe">
            <BrowserRouter>
              <Navbar>
                <Container fluid className="navbar-container">
                  <Navbar.Brand href="/">Corderoy</Navbar.Brand>
                  <Nav>
                    {Object.entries(categories).map(([idName, dispName]) => (
                      <NavLink as={Link} to={"/" + idName}>{dispName}</NavLink>
                    ))}
                  </Nav>
                </Container>
              </Navbar>
              <Routes>
                {Object.entries(categories).map(([idName, dispName]) => (
                    <Route path={"/" + idName} element={<Catalog category={idName}/>}/>
                ))}
              </Routes>
            </BrowserRouter>
          </div>
        );
    }
}

export default Wardrobe;