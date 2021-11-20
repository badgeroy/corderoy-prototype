import "../styles/MiniCart.css"
import React from "react";
import {Card, CardImg, Col, Container, Row} from "react-bootstrap";
import AddLogo from "../images/crop_free_tight_36px.svg"


class MiniCart extends React.Component {
    static defaultProps = {
        items: [],
    }

    render() {
        const usdFormatter = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
        const children = React.Children.toArray(this.props.children)
        return (
            <div className="MiniCart">
              <div className="header cart-row">
                <div className="pad cart-col-left" />
                <div className="label cart-col-right">{this.props.name}</div>
              </div>
              <div className="content cart-row">
                <div className="price cart-col-left">{usdFormatter.format(this.props.price)}</div>
                <div className="items cart-col-right">
                  <div className="items-wrapper">
                    {[...Array(Math.ceil(children.length / this.props.cols))].map((row, idx) => {
                      const start = idx * this.props.cols;
                      const end = start + this.props.cols;
                      return children.slice(start, end);
                    }).map(row => (
                        <Row className="no-gutters" xs={this.props.cols}>
                          {row.map((i, idx) => <Col >{i}</Col>)}
                        </Row>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default MiniCart;