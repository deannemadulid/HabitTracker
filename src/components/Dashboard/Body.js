import React from 'react'
import Table from 'react-bootstrap/Table'
import dashboard from './DashboardFunctions'

const Body = ({dates, habits}) => {

  console.log(dates)

  return (
    <tbody>
      { habits.map(habit => 
        <tr>
          <td>{habit.name}</td>
          { 
            dates.map(date => 
            <td>
              {
                dashboard.checkDateInDateArray(date, habit.dates)
                ? <span>yes</span> 
                : <span>no</span>
              }
            </td>)}
        </tr>) }
    </tbody>
    )
}

export default Body