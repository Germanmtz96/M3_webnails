import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
  
    <Navbar bg="dark" variant="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand  as={Link} to="/" style={{textTransform:"uppercase", fontSize:"12px", fontWeight: "300", letterSpacing: "0.2rem"}}>Reixelnails</Navbar.Brand>
          <Nav className="me-auto" style={{textTransform:"uppercase", fontSize:"8px",  fontFamily: "Gruppo"}}>
            <Nav.Link  as={Link} to="/cita" >Coger cita</Nav.Link>
            <Nav.Link  as={Link} to="/horarios" >Horario</Nav.Link>
            <Nav.Link  as={Link} to="/galeria" >Galeria</Nav.Link>
          </Nav>
          <NavDropdown title="" align="end" id="basic-nav-dropdown" style={{color:'white'}}>
            <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Clientas
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Agenda</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Cerrar Sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

  )
}

export default MyNavbar