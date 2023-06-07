import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navbar2() {
  return (
    <div>
         <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MAIN PAGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">REGISTER</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">LOGIN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                DETAILS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SOMETHING</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar2