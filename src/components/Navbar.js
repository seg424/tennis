import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default ({match}) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>
      <img src="/adi_tennis_logo.png" alt="adi-tennis-logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer exact to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Leagues" id="basic-nav-dropdown">
          <LinkContainer to="league-b">
            <NavDropdown.Item>League B</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="league-c">
            <NavDropdown.Item>League C</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="league-d">
            <NavDropdown.Item>League D</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/news">
          <Nav.Link>News</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/info">
          <Nav.Link>League Info</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/rules">
          <Nav.Link>Rules</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/where-we-play">
          <Nav.Link>Where We Play</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Admin" id="basic-nav-dropdown">
          <LinkContainer to="manage-users">
            <NavDropdown.Item>Manage Users</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="scheduler">
            <NavDropdown.Item>Scheduling</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="league-d">
            <NavDropdown.Item>Scorekeeping</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
