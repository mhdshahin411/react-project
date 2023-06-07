import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Navbar1 () {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Nav className="me-auto" >
            {/* <Nav.Link href="#home"><Link to="/home">Home</Link></Nav.Link> */}
            <Nav.Link href="#features" > <Link to="/Register1" >register</Link></Nav.Link>
            <Nav.Link href="#pricing"> <Link to="/login1">Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  );
}
export default Navbar1;
