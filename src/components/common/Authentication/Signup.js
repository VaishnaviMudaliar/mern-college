import React from 'react';
import './Login.css';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Signup from './Signup';
export default function Login() {
  return (
    <div className="Login">
      <h2>Sign Up</h2>
      <Form className="form">
        <FormGroup>
          <Label for="exampleEmail">FirstName</Label>
          <Input
            type="text"
            name="FirstName"
            id="exampleEmail"
            placeholder="FirstName"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Last Name</Label>
          <Input
            type="text"
            name="LastName"
            id="examplePassword"
            placeholder="LastName"
          />
        </FormGroup>
        <Button>Submit</Button>
       
      </Form>
    </div>
  );
}
