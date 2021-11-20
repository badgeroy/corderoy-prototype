import "../styles/MiniCart.css"
import React from "react";
import {Card, CardImg} from "react-bootstrap";
import AddLogo from "../images/add_36px_outlined.svg"


class MiniCart extends React.Component {
    static defaultProps = {
        items: []
    }

    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }

    getTotalPrice() {
        const total =  this.state.items.map(i => parseFloat(i.getPrice().slice(1))).reduce((a, b) => a + b, 0);
        return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(total);
    }

    render() {
        return (
            <div className="MiniCart">
              <div className="header cart-row">
                <div className="pad cart-col-left" />
                <div className="label cart-col-right">{this.props.name}</div>
              </div>
              <div className="content cart-row">
                <div className="price cart-col-left">{this.getTotalPrice()}</div>
                <div className="items cart-col-right">
                  <Card style={{width: "3.6rem"}}>
                    <CardImg src={AddLogo}/>
                  </Card>
                </div>
              </div>
            </div>
        );
    }
}

export default MiniCart;