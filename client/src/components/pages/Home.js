import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../layout/ProductCard';
import products from '../../products';

const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
