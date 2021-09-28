import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useHistory, Link} from 'react-router-dom'
import './SignIn.css'


const SignIn = () => {
  const history = useHistory()
  
  const handleSignIn = (event) => {
    event.preventDefault()
    console.log("form submitted")
    // add code to verify login
    // if invalid login
    // display error message
    // else
    history.push("/")
  }

  return (
    <div id="signin-form">
      <h1>Sign In to HabitTracker</h1>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
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
      
      {/* need to change this link later and create the proper page
      <div>
        <Link to="/">
          {/* need to change this link later and create the proper page
          Forgot password?
        </Link>
      </div>
    */}

      Don't have an account? 
      <Link to="/signup" id="signup-link">
        Create an account
      </Link>
    </div>
  )
}

export default SignIn