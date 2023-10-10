import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap';
import './navbar.css';

class NaviBarComponent extends React.Component {
  render() {
    return (
      <Navbar scrolling variant="dark" expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/new_logo.png"
              width="28vw"
              height="28vw"
              title="Home"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="ml-auto" id="links">
            <Nav.Link href="/projects">projects</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export { NaviBarComponent }