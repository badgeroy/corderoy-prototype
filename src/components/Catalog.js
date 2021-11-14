import "../styles/Catalog.css"
import React from "react";
import {Card, Col, Container, Row, Form, Button} from "react-bootstrap";

class Catalog extends React.Component {
    render() {
        const products = this.props.category.getProducts();
        return (
            <div className="Catalog">
              <div className="cards">
                <Container fluid>
                  <Row>
                    <Form className="filter-menu">
                      <Form.Select className="sort-input shadow-none">
                        <option>Sort</option>
                        <option>Editor's Pick</option>
                        <option>Exclusives</option>
                        <option>Hearts</option>
                        <option>Price High to Low</option>
                        <option>Price Low to High</option>
                        <option>Ratings</option>
                      </Form.Select>
                      <Form.Group className="query-group">
                        <Form.Control className="price-input min-price-input shadow-none" type="text" placeholder="$ Min"/>
                        <Form.Control className="price-input max-price-input shadow-none" type="text" placeholder="$ Max"/>
                        <Form.Control className="query-input shadow-none" type="text" placeholder="Search"/>
                        <Button className="apply-btn shadow-none" variant="primary" type="submit">
                          Apply
                        </Button>
                      </Form.Group>
                    </Form>
                  </Row>
                  <Row xs={3} md={5} className="g-4">
                      {this.props.category.getProducts().map(prod => (
                          <Col>
                            <Card style={{ width: "100%", minWidth: "85px", maxWidth: "160px" }}>
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