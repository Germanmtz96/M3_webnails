import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../context/auth.context';

function MyNavbar() {
  const navigate = useNavigate()
  const { isLoggedIn, authenticateUser, isAdmin } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticateUser()
    navigate("/")
  }
  console.log(`isAdmin ${isAdmin}`)

  return (
  
    <Navbar bg="dark" variant="dark" data-bs-theme="dark" className='navbar-container'>
        <Container>
          <Navbar.Brand className='navbar-logo' as={Link} to="/" style={{textTransform:"uppercase", fontSize:"12px", fontWeight: "300", letterSpacing: "0.2rem"}}>Reixelnails</Navbar.Brand>
          <Nav className="me-auto" style={{textTransform:"uppercase", fontSize:"8px",  fontFamily: "Gruppo"}}>
            <Nav.Link className='navbar-pagina' as={Link} to="/servicios" >Servicios</Nav.Link>
            { isLoggedIn && <Nav.Link className='navbar-pagina' as={Link} to="/cita" >Coger cita</Nav.Link>}
            <Nav.Link className='navbar-pagina' as={Link} to="/galeria" >Galeria</Nav.Link>
          </Nav>
          <NavDropdown title="" align="end" id="basic-nav-dropdown" style={{color:'white'}}>
          { isLoggedIn && <NavDropdown.Item className='navbar-pagina-dropdown' as={Link} to="/perfil">Perfil</NavDropdown.Item>}
            { isAdmin && <NavDropdown.Item className='navbar-pagina-dropdown' as={Link} to="/clientas">
              Clientas
            </NavDropdown.Item>}
            { isAdmin && <NavDropdown.Item className='navbar-pagina-dropdown' as={Link} to="/agenda">Agenda</NavDropdown.Item>}
            <NavDropdown.Divider />
            { isLoggedIn && <NavDropdown.Item className='navbar-pagina-dropdown' onClick={handleLogout}>
              Cerrar Sesión
            </NavDropdown.Item>}
            {!isLoggedIn &&<NavDropdown.Item className='navbar-pagina-dropdown' as={Link} to="/singup">
              Registrarse
            </NavDropdown.Item>}
            {!isLoggedIn &&<NavDropdown.Item className='navbar-pagina-dropdown' as={Link} to="/login">
              Iniciar Sesión
            </NavDropdown.Item>}
          </NavDropdown>
        </Container>
      </Navbar>

  )
}

export default MyNavbar