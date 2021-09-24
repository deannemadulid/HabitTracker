import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useHistory, Link} from 'react-router-dom'


const SignIn = () => {
  const history = useHistory()
  
  const logIn = (event) => {
    event.preventDefault()
    console.log("form submitted")
    // add code to verify login
    // if invalid login
    // display error message
    // else
    history.push("/")
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <Form onSubmit={logIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
      
      <Link to="/">
        <Button>Cancel</Button>
      </Link>
    </div>
  )
}

export default SignIn