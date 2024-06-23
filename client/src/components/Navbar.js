import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function CustomNav() {
const { logout } = useLogout()
  const handleClick = () => {
logout()
  }
    return (
        <Navbar expand="lg" sticky="top" className="nav">
        <Container>
          <Navbar.Brand href="/" className="navHeader">Tide Together</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navLink" href="/">Home</Nav.Link>
              <Nav.Link className="navLink" href="/about">About</Nav.Link>
              <Nav.Link className="navLink" href="/conservation">Conservation</Nav.Link>
              <Nav.Link className="navLink" href="/contact">Contact</Nav.Link>
              <NavDropdown title="Sponsor" id="basic-nav-dropdown" className="navLink">
                <NavDropdown.Item href="sponsor#tierOne">Tier One</NavDropdown.Item>
                <NavDropdown.Item href="sponsor#tierTwo">Tier Two</NavDropdown.Item>
                <NavDropdown.Item href="sponsor#tierThree">Tier Three</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Signup">View Sponsorship</NavDropdown.Item>
              </NavDropdown>
              <div>
                <button onClick={handleClick}>Log out</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default CustomNav;