import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Container>
        <footer className="py-3 my-4">
          <Nav className="justify-content-center border-bottom pb-3 mb-3">
            <Nav.Item>
              <Link to='/' className="nav-link text-body-secondary">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/about' className="nav-link text-body-secondary">About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/conservation' className="nav-link text-body-secondary">Conservation</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/contact' className="nav-link text-body-secondary">Contact</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/sponsor' className="nav-link text-body-secondary">Sponsor</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/acknowledgements' className="nav-link text-body-secondary">Acknowledgements</Link>
            </Nav.Item>
          </Nav>
          <p className="text-center text-body-secondary">&copy; 2024 Tide Together, Inc</p>
        </footer>
      </Container>
    </footer>
  );
}

export default Footer;
