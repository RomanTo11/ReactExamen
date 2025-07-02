import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarApp: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi App Bootstrap</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>
          <Nav.Link as={Link} to="/sueldo">Sueldo</Nav.Link>
          <Nav.Link as={Link} to="/bono">Bono</Nav.Link>
          <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
