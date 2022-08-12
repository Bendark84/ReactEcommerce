import React, { useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { buyCartThunk, getCartThunk } from '../store/slices/cart.slice';
import { Button } from 'react-bootstrap';

const ShoopingCart = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shooping</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Button onClick={() => dispatch(buyCartThunk())}>Buy Cart</Button>
        <ul>
          {carts?.map((cart) => (
            <li onClick={() => navigate(`/product/${cart.products.id}`)}>
              {cart.title}
              {cart.price}
            </li>
          ))}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoopingCart;
