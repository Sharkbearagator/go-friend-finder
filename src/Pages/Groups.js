import React from 'react';
import {Nav, Navbar, Button, Jumbotron, Card, Row, Carousel} from 'react-bootstrap';

function Group (){
    return(
      <div>
      <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">Go Friend Finder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/groups">Groups</Nav.Link>
      <Nav.Link href="/account">Account</Nav.Link>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      </Nav>
      </Navbar.Collapse>
</Navbar>
<Carousel>
  <Carousel.Item>
    <img
      className="carousel-img"
      src="https://i.gadgets360cdn.com/large/pokemon_go_1570599333441.jpg?output-quality=80&output-format=webp"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Top Groups</h3>
      <p>Trending Groups will go here.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-img"
      src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidthier%2Ffiles%2F2019%2F09%2F960x0-5.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Let's Go Raid</h3>
      <p>A group for finding raids!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-img"
      src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,fl_progressive,q_80,w_137/hehfjmec9gveozuwdbbz.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Team Instinct</h3>
      <p>Group for Team Instinct!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Jumbotron>
        <Row>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 1</Card.Title>
    <Card.Text>
      Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
 <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 2</Card.Title>
    <Card.Text>
    Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Group 3</Card.Title>
    <Card.Text>
    Auto filled group cards
    </Card.Text>
    <Button variant="primary">Join Group</Button>
  </Card.Body>
</Card>
</Row>
      </Jumbotron>
      </div>
    )
}

export default Group;