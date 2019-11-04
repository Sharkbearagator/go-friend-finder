<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Nav, Navbar, Button, Jumbotron } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Jumbotron>
=======
import React from 'react';
import { Button, Jumbotron,} from 'react-bootstrap';

function Home (){
    return(
      <div>
        <Jumbotron>
>>>>>>> 3f2a470691982901405ad9a54c9c9d2da687d261
=======

import React from 'react';
import { Button, Jumbotron,} from 'react-bootstrap';

function Home (){
    return(
      <div>
        <Jumbotron>

>>>>>>> ec5069b44b033693e87ceedf06b5966b5f06b253
        <h1>Hello, Trainers!</h1>
        <p>
          Welcome to Go Friend Finder! A place where you can find all the people
          that love GO as much as you do. Create your account here or login with
          Google, Facebook, or your account.
        </p>
        <p>
          <Button variant="primary" a href="/login">
            Login
          </Button>
          <Button variant="primary">Create account</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Home;
