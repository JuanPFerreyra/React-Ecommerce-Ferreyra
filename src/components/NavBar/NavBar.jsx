import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

function NavBar() {
    const {iconCartWidget} = useCartContext()

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">JT Indumentaria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/' style={{textDecoration: 'none', color:'black'}}>Inicio</Link>
                    <Nav.Link href="#link">Preguntas Frecuentes</Nav.Link>
                    <NavDropdown title="Prendas" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to='/categoria/Remeras' style={{textDecoration: 'none', color:'black'}}>Remeras</Link></NavDropdown.Item> 
                        <NavDropdown.Item><Link to='/categoria/Pantalones' style={{textDecoration: 'none', color:'black'}}>Pantalones</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Link to='/cart'>
                    {iconCartWidget() !== 0 && iconCartWidget()}
                    <CartWidget />
                </Link>
            </Container>
        </Navbar>
    )
  }

  export default NavBar;