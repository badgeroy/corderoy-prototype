import "../styles/CatalogCard.css"
import React from "react";
import {Card} from "react-bootstrap";


class CatalogCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 0
        }
    }

    render() {
        const imgBaseURL = "https://m.media-amazon.com/images/G/01/Shopbop/p";
        return (
            <div className="CatalogCard">
              <Card>
                <Card.Img
                    variant="top"
                    src={imgBaseURL + this.props.prod.getColors()[this.state.color].getImages()[0]}
                />
                <Card.Body>
                  <Card.Title>{this.props.prod.getDesigner()}</Card.Title>
                  <div className="card-label">
                    <Card.Text className="card-desc">{this.props.prod.getDescription()}</Card.Text>
                    <Card.Text className="card-price">{this.props.prod.getPrice()}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
        );
    }
}

export default CatalogCard;