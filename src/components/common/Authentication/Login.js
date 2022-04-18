import React from 'react';
import './Login.css';
import Signup from './Signup';
// import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
export default function Login() {
  return (
    <div className="Login">
      <h2>Sign In</h2>
      <Form className="form">
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
