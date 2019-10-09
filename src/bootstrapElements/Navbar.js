import React from 'react';
import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

function Navigator (){
    return(
    <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">Go Friend Finder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#home">Groups</Nav.Link>
      <Nav.Link href="#link">Account</Nav.Link>
      </Nav>
      </Navbar.Collapse>
</Navbar>
    )
}

export default Navigator;