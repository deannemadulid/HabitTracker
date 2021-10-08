import React, {useState} from 'react'
import Table from 'react-bootstrap/Table'
import dashboard from './DashboardFunctions'
import Headers from './Headers'
import Body from './Body'
import AddHabit from './AddHabit'

import './Dashboard.css'

const Dashboard = () => {
  
  const dates = dashboard.past7Days()

  return (
    <>
      <AddHabit />
      <Table striped bordered>
        <Headers dates={dates} />
        <Body dates={dates} />
      </Table>
    </>
  )
}


export default Dashboard