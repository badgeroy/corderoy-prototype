import "../styles/MiniCart.css"
import React from "react";
import {Card, CardImg, Col, Container, Row} from "react-bootstrap";
import AddLogo from "../images/crop_free_tight_36px.svg"


class MiniCart extends React.Component {
    static defaultProps = {
        items: []
    }

    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
            usdFormatter: new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"})
        }
        this.getTotalPrice = this.getTotalPrice.bind(this);
        this.renderItems = this.renderItems.bind(this);
    }

    getTotalPrice() {
        return this.state.items.map(i => parseFloat(i.getPrice().slice(1))).reduce((a, b) => a + b, 0);
    }

    renderItems() {
        const colPerRow = 6;
        const items = this.state.items.map(i => (
          <Card>
            <CardImg src={i.getImages()[0]}/>
          </Card>
        ));
        items.push(
            <Card>
              <CardImg src={AddLogo}/>
            </Card>
        );
        return (
            <div className="items-wrapper">
              {[...Array(Math.ceil(items.length / colPerRow))].map((row, idx) => {
                  const start = idx * colPerRow;
                  const end = start + colPerRow;
                  return items.slice(start, end);
              }).map(row => (
                  <Row className="no-gutters" xs={colPerRow}>
                    {row.map((i, idx) => <Col >{i}</Col>)}
                  </Row>
              ))}
            </div>
        );
    }

    render() {
        return (
            <div className="MiniCart">
              <div className="header cart-row">
                <div className="pad cart-col-left" />
                <div className="label cart-col-right">{this.props.name}</div>
              </div>
              <div className="content cart-row">
                <div className="price cart-col-left">{this.state.usdFormatter.format(this.getTotalPrice())}</div>
                <div className="items cart-col-right">
                  {this.renderItems()}
                </div>
              </div>
            </div>
        );
    }
}

export default MiniCart;