import React from 'react'
import Table from 'react-bootstrap/Table'
import dashboard from './DashboardFunctions'
import Headers from './Headers'

import './Dashboard.css'

const Dashboard = () => {

  const today = new Date()
  const yesterday = today.setDate(today.getDate() - 1)
  
  const dates = dashboard.past7Days()
  console.log(dates)
  const habits= [
    ["habit1", [today]],
    ["habit2", [yesterday, today]]
  ]

  return (
    <Table striped bordered hover>
      <Headers dates={dates}/>
    </Table>
  )
}

export default Dashboard