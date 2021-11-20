import "../styles/Catalog.css"
import React from "react";
import {Card, Col, Container, Row, Form, Button} from "react-bootstrap";
import CatalogCard from "./CatalogCard";

class Catalog extends React.Component {
    render() {
        const products = this.props.category.getProducts();
        const colPerRow = 5;
        return (
            <div className={"Catalog" + (this.props.className ? " " + this.props.className : "")}>
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
                  {[...Array(Math.ceil(products.length / colPerRow))].map((row, idx) => {
                      const start = idx * colPerRow;
                      const end = start + colPerRow;
                      return products.slice(start, end);
                  }).map((row, idx) => (
                      <Row className="no-gutters" key={idx} xs={colPerRow}>
                        {row.map(prod => (
                            <Col>
                              <CatalogCard prod={prod}/>
                            </Col>
                        ))}
                      </Row>
                  ))}
                </Container>
              </div>
            </div>
        );
    }
}

export default Catalog;