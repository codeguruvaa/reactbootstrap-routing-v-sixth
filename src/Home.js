import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

export default function Home(){
    return (
      <div>

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                <Nav.Link><Link to="/services">Services</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
            <h2 className="display-5">Home Page</h2>
            <p>
                the quick rbown fox jumps over the alzy dogthe quick rbown fox jumps over the alzy dog
                the quick rbown fox jumps over the alzy dogthe quick rbown fox jumps over the alzy dog
                the quick rbown fox jumps over the alzy dogthe quick rbown fox jumps over the alzy dog
                the quick rbown fox jumps over the alzy dogthe quick rbown fox jumps over the alzy dog
                the quick rbown fox jumps over the alzy dogthe quick rbown fox jumps over the alzy dog
                the quick rbown fox jumps over the alzy dogthe quick rbown fox jumps over the alzy dog
            </p>
        </Container>

      </div>
    );
}

