import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap';

class NaviBarComponent extends React.Component {
    render() {
        return (
            <Navbar scrolling variant="dark" expand="md" fixed="top">
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="/new_logo.png"
                  width="30"
                  height="30"
                  title="home"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Nav className="ml-auto">
                  <Nav.Link href="/projects">projects</Nav.Link>
                  <Nav.Link href="/about">about</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )
    }
}

export { NaviBarComponent }