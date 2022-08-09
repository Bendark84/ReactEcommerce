import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterCategoryThunk,
  filterProductThunk,
  getProductThunk,
} from '../store/slices/product.slice';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Col,
  Row,
  InputGroup,
  Button,
  Form,
  ListGroup,
} from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState([]);

  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductThunk());
    axios
      .get(
        `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  console.log(categories);

  // console.log(products);
  return (
    <div className="home-container">
      <h1>Home</h1>
      <Row>
        <Col lg={3}>
          <ListGroup as="ul">
            {categories.map((category) => (
              <ListGroup.Item
                key={category.name}
                onClick={() => dispatch(filterCategoryThunk(category.id))}
                as="li"
                active
              >
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={() => dispatch(filterProductThunk(searchValue))}
            >
              Button
            </Button>
          </InputGroup>
          <Row xs={1} md={2} xl={3} className="g-4">
            {products?.map((product) => (
              <Col key={product.id}>
                <Card>
                  <Card.Img
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="home-img"
                    variant="top"
                    src={product.productImgs}
                  />
                  <Card.Body>
                    <Card.Title
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <strong className="strong-title">
                        {' '}
                        {product.title}{' '}
                      </strong>
                    </Card.Title>
                    <Card.Text>
                      {' '}
                      <strong className="strong-price">
                        {' '}
                        ${product.price}{' '}
                      </strong>
                    </Card.Text>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
