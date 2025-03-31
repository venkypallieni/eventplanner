import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import logo from "../assets/logo.png"; // Adjust path if needed

const AppNavbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" style={{ width: "40px", height: "40px", marginRight: "10px" }} />
          Event Planner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>
          {user ? (
            <Button variant="outline-light" onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}>
              Logout
            </Button>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
