import React from "react";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-primary navbar-expand">
      <Container>
        <NavbarBrand>
          <Link to="/">
            <img src="./legend.png" alt="legend" style={{ height: "15vh", width: "20vh" }} /></Link></NavbarBrand>
        <Nav>
          <Nav.Item>
            <Link to="/addcustomer" className="nav-link">
              ADD
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link">
              SIGNIN
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/register" className="nav-link">
              SIGNUP
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
