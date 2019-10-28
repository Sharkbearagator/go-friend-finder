import React from "react";
import { Button, Jumbotron, Form } from "react-bootstrap";

function Log() {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, Returning Trainer!</h1>
        <p>Sign in with facebook, google, or your Go Friend Finder account</p>
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
            <Button variant="primary" type="submit">
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
