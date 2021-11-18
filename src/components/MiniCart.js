import "../styles/MiniCart.css"
import React from "react";


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
              <div className="label">
                <div className="label-title">{this.props.name}</div>
                <div className="label-price">{this.getTotalPrice()}</div>
              </div>
            </div>
        );
    }
}

export default MiniCart;