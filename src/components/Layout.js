// src/components/Layout.js
import React from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Layout({
  children,  // This will render the page content passed to Layout
  showOffcanvas,
  handleShowOffcanvas,
  handleCloseOffcanvas,
  getOffcanvasTitle,
  getOffcanvasContent
}) {
  return (
    <div className="app">
      {/* Static Navbar */}
      <Navbar fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <section className="aoe-studios-logo"></section>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link onClick={() => handleShowOffcanvas('kanaCold')}>Kana Cold</Nav.Link>
            <Nav.Link onClick={() => handleShowOffcanvas('theImmanentWorld')}>The Immanent World</Nav.Link>
            <Nav.Link as={Link} to="https://www.amazon.com/stores/page/20FC86AB-35FB-4E43-B6E2-008A266FA845" target='_blank'>Shop</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{getOffcanvasTitle()}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>{getOffcanvasContent()}</div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content */}
      <div className="content">
        {children} {/* This will render the page-specific content */}
      </div>
    </div>
  );
}

export default Layout;
