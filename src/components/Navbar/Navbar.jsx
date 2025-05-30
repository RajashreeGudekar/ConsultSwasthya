import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const NavigationBar = () => {
  return (
    <Navbar
      bg="white"
      variant="light"
      expand="lg"
      className="shadow-sm sticky-top"
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        {/* Logo + Brand */}
        <div className="d-flex align-items-center">
          <img
            src="/images/major_logo.jpg"
            alt="Logo"
            className="logo-img me-2"
          />
          <span className="brand-name">
            Consult<span className="brand-highlight">Swasthya</span>
          </span>
        </div>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Nav Items */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end nav">
          <Nav>
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/main"  className="nav-link">
              Survey
            </Nav.Link>
            <Nav.Link as={Link} to="/educateyourself"  className="nav-link">
              Educate YourSelf
            </Nav.Link>
            <Nav.Link as={Link} to="/medicallab"  className="nav-link">
              Medical Lab
            </Nav.Link>
            <Nav.Link as={Link} to="/expertblog"  className="nav-link">
              Expert Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/expert"  className="nav-link">
              Expert
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
