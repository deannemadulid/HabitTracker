import React from 'react'
import { Link } from "react-router-dom"

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