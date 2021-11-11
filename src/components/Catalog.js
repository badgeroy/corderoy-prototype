import React from "react";
import {Card} from "react-bootstrap";

class Catalog extends React.Component {
    render() {
        return (
            <div className="Catalog">
              <div className="filter-menu"></div>
              <div className="cards">
                {this.props.category.getProducts().map(prod => (
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={"https://m.media-amazon.com/images/G/01/Shopbop/p" + prod.getMainImage()} />
                      <Card.Body>
                        <Card.Title>{prod.getDesigner()}</Card.Title>
                        <Card.Text>{prod.getDescription()}</Card.Text>
                      </Card.Body>
                    </Card>
                ))}
              </div>
            </div>
        );
    }
}

export default Catalog;