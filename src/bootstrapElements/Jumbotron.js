import React from 'react';
import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Jumbotron} from 'react-bootstrap';

function Tron (){
    return(
        <Jumbotron>
        <h1>Hello, Trainers!</h1>
        <p>
          Welcome to Go Friend Finder! A place where you can find all the people that love GO as much as you do.
          Create your account here or login.
        </p>
        <p>
    <Button variant="primary">Login</Button>
        </p>
        <p>
    <Button variant="primary">Create account</Button>
        </p>
      </Jumbotron>
    )
}

export default Tron;