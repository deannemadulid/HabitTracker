import React from 'react'
import Table from 'react-bootstrap/Table'
import dashboard from './DashboardFunctions'
import Headers from './Headers'
import Body from './Body'

import './Dashboard.css'

const Dashboard = () => {

  // test data
  const day1 = new Date()
  const day2 = new Date()
  day2.setDate(day2.getDate() - 1)
  
  const dates = dashboard.past7Days()
  const habitsLast7Days= [
    {name: "habit1", dates: [day1]},
    {name: "habit2", dates: [day1, day2]}
  ]
  // end test data

  return (
    <Table striped bordered hover>
      <Headers dates={dates} />
      <Body dates={dates} habits={habitsLast7Days} />
    </Table>
  )
}

export default Dashboard