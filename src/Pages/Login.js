import React from "react";
import { Nav, Navbar, Button, Jumbotron, Form } from "react-bootstrap";

function Log() {
  return (
    <div>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Go Friend Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/groups">Groups</Nav.Link>
            <Nav.Link href="/account">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <Jumbotron>
        <h1>Hello, Returning Trainer!</h1>
        <p>
        Sign in with facebook, google, or your Go Friend Finder account
        </p>
        <p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" >
            <i class="fab fa-facebook-f"></i>
            </Button>
            <Button variant="primary" type="submit">
            <i class="fab fa-google"></i>
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Log;
