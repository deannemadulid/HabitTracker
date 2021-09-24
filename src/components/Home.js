import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import SignUp from '../components/SignUp/SignUp'
import { Switch, Route, Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      HabitTracker Home Page
      <div>
        <Link to="/signup"><Button>Sign Up</Button></Link>
      </div>
    </div>
  )
}

export default Home