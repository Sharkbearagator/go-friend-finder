import React from "react";
import { Button, Jumbotron, Form, Row } from "react-bootstrap";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { tsPropertySignature } from "@babel/types";
function Log() {
  const responseFacebook = response => {
    console.log(response);
    props.userHasAuthenticated(true);
    props.history.push("/account")
  };
  const responseGoogle = response => {
    console.log(response);
    props.userHasAuthenticated(true);
    props.history.push("/account")
  };
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
            <Row>
            <FacebookLogin
              appId="1088597931155576"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              size="small"
              icon="fa-facebook-square fa-2x "
              textButton="Login"
              buttonStyle={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                fontSize: "10px",
                padding: "5px",
                borderRadius: "10px",
                margin: "15px"
              }}
            />
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              buttonStyle={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                fontSize: "10px",
                borderRadius: "10px",
                margin: "15px"
              }}
            />
            </Row>
          </Form>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Log;
