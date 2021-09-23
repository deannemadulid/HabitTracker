import React from 'react'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router, NavLink, Link} from 'react-router-dom'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Router>
        <Navbar.Brand>
          <Link to="/"><div className="Home">HabitTracker</div></Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <NavLink to='/signin'>Sign In</NavLink>
          </Nav.Link>
        </Nav>
      </Router>
    </Navbar>
    </>
  )
}

export default NavigationBar