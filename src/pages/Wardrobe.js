import "../styles/Wardrobe.css";
import React from "react";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Catalog from "../components/Catalog";
import LeftArrow from "../images/left-arrow-icon.svg";
import RightArrow from "../images/right-arrow-icon.svg";
import {Category} from "../shopbop";
import OutfitList from "../components/OutfitList";
import ScrollMenu from "../components/ScrollMenu";


class Wardrobe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: Category.getRootCategories()
        };
    }

    render() {
        return (
          <div className="Wardrobe">
            <BrowserRouter>
              <Navbar sticky="top">
                <Container fluid className="navbar-container">
                  <Navbar.Brand href="/">Corderoy</Navbar.Brand>
                  <ScrollMenu className="navbar-menu" width={"70vw"}>
                    {this.state.categories.map(cat => (
                        <NavLink className={"nav-" + cat.getId()} as={Link} to={"/" + cat.getId()}>
                          {cat.getName()}
                        </NavLink>
                    ))}
                  </ScrollMenu>
                </Container>
              </Navbar>
              <div className="Wardrobe-body">
                <Nav className="outfit-list-wrapper">
                  <div className="outfit-list-title">
                    Your Outfit Selection
                  </div>
                </Nav>
                <Routes>
                  {this.state.categories.map(cat => (
                      <Route path={"/" + cat.getId()} element={<Catalog category={cat}/>}/>
                  ))}
                </Routes>
              </div>
            </BrowserRouter>
          </div>
        );
      }
}

export default Wardrobe;