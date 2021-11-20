import "../styles/Wardrobe.css";
import React from "react";
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Catalog from "../components/Catalog";
import LeftArrow from "../images/left-arrow-icon.svg";
import RightArrow from "../images/right-arrow-icon.svg";
import {Category} from "../shopbop";
import ScrollMenu from "../components/ScrollMenu";
import MiniCart from "../components/MiniCart";


class Wardrobe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: Category.getRootCategories()
        };
    }

    componentDidMount() {
        this.outfitList.style.top = this.navbar.clientHeight.toString() + "px";
    }

    render() {
        return (
            <div className="Wardrobe">
              <BrowserRouter>
                <Navbar sticky="top" ref={e => this.navbar = e}>
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
                  <div className="outfit-list-wrapper">
                    <section className="outfit-list-content" ref={e => this.outfitList = e}>
                      <h3>Your Outfit Selection</h3>
                      <MiniCart name="CLOTHING"/>
                      <MiniCart name="SHOES"/>
                      <MiniCart name="BAGS"/>
                      <MiniCart name="ACCESSORIES"/>
                    </section>
                  </div>
                  <Routes>
                    {this.state.categories.map(cat => (
                        <Route path={"/" + cat.getId()} element={<Catalog className="catalog" category={cat}/>}/>
                    ))}
                  </Routes>
                </div>
              </BrowserRouter>
            </div>
        );
    }
}

export default Wardrobe;