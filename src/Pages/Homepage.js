import React from 'react';
import {Nav, Navbar, Button, Jumbotron} from 'react-bootstrap';

function Home (){
    return(
      <div>
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
        <Jumbotron>
        <h1>Hello, Trainers!</h1>
        <p>
          Welcome to Go Friend Finder! A place where you can find all the people that love GO as much as you do.
          Create your account here or login with Google, Facebook, or your account.
        </p>
        <p>
    <Button variant="primary">Login</Button>
    <Button variant="primary">Create account</Button>
        </p>
        
      </Jumbotron>
      </div>
    )
}

export default Home;