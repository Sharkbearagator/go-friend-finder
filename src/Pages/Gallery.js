import React from "react";
import { Nav, Navbar, Jumbotron, Card, Row, Button, Col } from "react-bootstrap";

function Gallery() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
<<<<<<< HEAD
<<<<<<< HEAD
        <Navbar.Brand href="/account">Go Friend Finder</Navbar.Brand>
=======
        <Navbar.Brand href="/groups">Go Friend Finder</Navbar.Brand>
>>>>>>> 3f2a470691982901405ad9a54c9c9d2da687d261
=======

        <Navbar.Brand href="/account">Go Friend Finder</Navbar.Brand>

>>>>>>> ec5069b44b033693e87ceedf06b5966b5f06b253
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/groups">Groups</Nav.Link>
            <Nav.Link href="/account">Account</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron className = "gallery-tron">
        <Row>
          <Col>
            <Card>
              <Card.Img src="https://i.redd.it/vceqchfhrek21.jpg" alt="Card image" />
              <Card.Footer>
                <Button variant="outline-dark" href="/">
                  VIEW
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src="http://40.media.tumblr.com/0faece4a8d8c2c6d5a305b77dae00cba/tumblr_nzbo97f0Cv1tsynyjo1_500.jpg" alt="Card image" />
              <Card.Footer>
                <Button variant="outline-dark" href="/">
                  VIEW
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src="https://i.redd.it/kjj6jadtpjs31.png" alt="Card image" />
              <Card.Footer>
                <Button variant="outline-dark" href="/questions">
                  VIEW
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default Gallery;
