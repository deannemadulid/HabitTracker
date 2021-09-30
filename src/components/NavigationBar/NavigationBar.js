import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import {NavLink, Link} from 'react-router-dom'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/"><div className="home">HabitTracker</div></Link>
        </Navbar.Brand>
        <Container>
        <Nav className="justify-content-end">
          <Nav.Link>
            <NavLink to='/signin'>Sign In</NavLink>
          </Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  )
}

export default NavigationBar