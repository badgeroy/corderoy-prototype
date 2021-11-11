import "../styles/Catalog.css"
import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

class Catalog extends React.Component {
    render() {
        const products = this.props.category.getProducts();
        return (
            <div className="Catalog">
              <div className="filter-menu"></div>
              <div className="cards">
                <Container fluid>
                  <Row xs={5} className="g-4">
                      {this.props.category.getProducts().map(prod => (
                          <Col>
                            <Card style={{ width: '12rem' }}>
                              <Card.Img variant="top" src={"https://m.media-amazon.com/images/G/01/Shopbop/p" + prod.getMainImage()} />
                              <Card.Body>
                                <Card.Title>{prod.getDesigner()}</Card.Title>
                                <div className="card-label">
                                  <Card.Text className="card-desc">{prod.getDescription()}</Card.Text>
                                  <Card.Text className="card-price">{prod.getPrice()}</Card.Text>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                      ))}
                  </Row>
                </Container>
              </div>
            </div>
        );
    }
}

export default Catalog;