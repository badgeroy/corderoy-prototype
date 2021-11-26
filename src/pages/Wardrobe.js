import "../styles/Wardrobe.css";
import React from "react";
import {Button, Card, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Catalog from "../components/Catalog";
import {Category} from "../shopbop";
import ScrollMenu from "../components/ScrollMenu";
import MiniCart from "../components/MiniCart";
import CropLogo from "../images/crop_free_tight_36px.svg";


class Wardrobe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: Category.getRootCategories().map(root => root.getChildren()).flat(),
            selectedClothing: [],
            selectedShoes: [],
            selectedBags: [],
            selectedAccessories: []
        };

        for (const cat of this.state.categories) {
            console.log(cat.getParent());
        }
    }

    componentDidMount() {
        this.outfitList.style.top = this.navbar.clientHeight.toString() + "px";
    }

    itemsToCard(items) {
        const cards = items.map(i => (
            <Card className="mini-card">
              <Card.Img src={i.getImages()[0]}/>
            </Card>
        ));
        cards.push(
            <Card className="mini-card">
              <Card.Img src={CropLogo}/>
            </Card>
        );
        return cards;
    }

    renderMiniCart(name, items) {
        return (
            <MiniCart name={name} cols={6} price={
              items.map(p => p.getPrice())
                   .reduce((a, b) => a + b, 0)
            }>
              {this.itemsToCard(items)}
            </MiniCart>
        );
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
                      {this.renderMiniCart("CLOTHING", this.state.selectedClothing)}
                      {this.renderMiniCart("SHOES", this.state.selectedShoes)}
                      {this.renderMiniCart("BAGS", this.state.selectedBags)}
                      {this.renderMiniCart("ACCESSORIES", this.state.selectedAccessories)}
                      <MiniCart name="" cols={1} price={
                        this.state.selectedClothing
                            .concat(this.state.selectedShoes)
                            .concat(this.state.selectedBags)
                            .concat(this.state.selectedAccessories)
                            .map(p => p.getPrice())
                            .reduce((a, b) => a + b, 0)
                      }>
                        <Button className="submit-outfit">
                          Proceed to preview
                        </Button>
                      </MiniCart>
                    </section>
                  </div>
                  <Routes>
                    {this.state.categories.map(cat => (
                        <Route path={"/" + cat.getId()} element={
                          <Catalog className="catalog" category={cat}/>
                        }/>
                    ))}
                  </Routes>
                </div>
              </BrowserRouter>
            </div>
        );
    }
}

export default Wardrobe;