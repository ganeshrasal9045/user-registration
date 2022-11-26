import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">User Registration</Navbar.Brand>
          <Nav className="me-auto" >
            <Link className="mx-3" to="/login">Home</Link>
            <Link to="/details">Features</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
