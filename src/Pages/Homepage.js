import React from 'react';
import { Button, Jumbotron,} from 'react-bootstrap';

function Home (){
    return(
      <div>
        <Jumbotron>
        <h1>Hello, Trainers!</h1>
        <p>
          Welcome to Go Friend Finder! A place where you can find all the people that love GO as much as you do.
          Create your account here or login with Google, Facebook, or your account.
        </p>
        <p>
    <Button variant="primary" a href="/login">Login</Button>
    <Button variant="primary">Create account</Button>
        </p>
        
      </Jumbotron>
      </div>
    )
}

export default Home;