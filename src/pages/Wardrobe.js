import "../styles/Wardrobe.css";
import React from "react";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Catalog from "../components/Catalog";
import LeftArrow from "../images/left-arrow-icon.svg";
import RightArrow from "../images/right-arrow-icon.svg";
import {Category} from "../shopbop";


class Wardrobe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: Category.getRootCategories()
        };
    }

    componentDidMount() {
        const leftArrow = document.getElementById("left-arrow");
        const rightArrow = document.getElementById("right-arrow");
        const navbarNav = document.getElementsByClassName("navbar-nav")[0];
        const displayArrows = event => {
          leftArrow.style.visibility = navbarNav.scrollLeft > 0 ?
              "visible" : "hidden";
          rightArrow.style.visibility = navbarNav.scrollLeft < navbarNav.scrollWidth - navbarNav.clientWidth ?
              "visible" : "hidden";
        }
        displayArrows();
        navbarNav.addEventListener("scroll", displayArrows);
    }

    render() {
        return (
          <div className="Wardrobe">
            <BrowserRouter>
              <Navbar>
                <Container fluid className="navbar-container">
                  <Navbar.Brand href="/">Corderoy</Navbar.Brand>
                  <div className="navbar-wrapper">
                    <div className="navbar-arrows" id="left-arrow">
                      <img src={LeftArrow}/>
                    </div>
                    <Nav>
                      {this.state.categories.map(cat => (
                          <NavLink className={"nav-" + cat.getId()} as={Link} to={"/" + cat.getId()}>
                              {cat.getName()}
                          </NavLink>
                      ))}
                    </Nav>
                    <div className="navbar-arrows" id="right-arrow">
                      <img src={RightArrow}/>
                    </div>
                  </div>
                </Container>
              </Navbar>
              <Routes>
                {this.state.categories.map(cat => (
                    <Route path={"/" + cat.getId()} element={<Catalog category={cat.getId()}/>}/>
                ))}
              </Routes>
            </BrowserRouter>
          </div>
        );
      }
}

export default Wardrobe;