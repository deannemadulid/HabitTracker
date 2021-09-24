import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import SignUp from '../SignUp/SignUp'
import { Switch, Route, Link } from "react-router-dom"

const Landing = () => {
  return (
    <div>
      HabitTracker Landing Page
      <div>
        <Link to="/signup"><Button>Sign Up</Button></Link>
      </div>
    </div>
  )
}

export default Landing