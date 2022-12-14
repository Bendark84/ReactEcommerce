import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ShoopingCart from './ShoopingCart';

const NavBar = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const token = localStorage.getItem('token');

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (token) {
      setShow(true);
    } else {
      navigate('/login');
    }
  };

  const logout = () => {
    localStorage.setItem('token', '');
    navigate('/login');
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/#/">
            {' '}
            <i className="fa-solid fa-cart-shopping"> </i> E-commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#/">Home</Nav.Link>
              <Nav.Link href="/#/shooping">Shooping</Nav.Link>
              {token ? (
                <Nav.Link onClick={logout}>Log out</Nav.Link>
              ) : (
                <Nav.Link href="/#/login">Login</Nav.Link>
              )}
              <Nav.Link onClick={handleShow}>Shooping (sideBar)</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ShoopingCart show={show} handleClose={handleClose} />
    </>
  );
};

export default NavBar;
