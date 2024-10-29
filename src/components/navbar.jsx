import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hydro from '../assets/hydro.webp'

function Navbarr() {
  return (
    <Navbar expand="lg" className="barra bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Nahara Zizzetta
          <img className='foton' src={hydro}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">contacto</Nav.Link>
    
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;