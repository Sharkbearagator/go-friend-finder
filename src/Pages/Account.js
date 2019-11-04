import React from 'react';
import {Nav, Navbar, Button, Jumbotron, Card, Row} from 'react-bootstrap';

function Acc (){
    return(
      <div>
      <Navbar bg="dark" variant="dark">
<<<<<<< HEAD
  <Navbar.Brand href="/account">Go Friend Finder</Navbar.Brand>
=======
  <Navbar.Brand href="/groups">Go Friend Finder</Navbar.Brand>
>>>>>>> 3f2a470691982901405ad9a54c9c9d2da687d261
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/groups">Groups</Nav.Link>
      <Nav.Link href="/account">Account</Nav.Link>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      </Nav>
      </Navbar.Collapse>
</Navbar>
        <Jumbotron>
       <div class = "username"><h1>Name Goes Here</h1></div>
        <p>
          Bio goes here.
        </p>
        <Row>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Groups</Card.Title>
    <Card.Text>
      Where they will find what groups they are in
    </Card.Text>
    <Button variant="primary">Go to group finder</Button>
  </Card.Body>
</Card>
 <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Gallery</Card.Title>
    <Card.Text>
      A place where they can post pictures of pokemon or anything else
    </Card.Text>
    <Button variant="primary">Go to Gallery</Button>
  </Card.Body>
</Card>
</Row>
      </Jumbotron>
      </div>
    )
}

export default Acc;