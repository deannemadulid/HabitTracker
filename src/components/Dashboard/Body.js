import React from 'react'
import Table from 'react-bootstrap/Table'
import dashboard from './DashboardFunctions'
import { useSelector, useDispatch } from 'react-redux'
import HabitOptions from './HabitOptions'

import './Dashboard.css'

const Body = ({dates}) => {
  const dispatch = useDispatch()
  const habits = useSelector(state => state.habits)

  return (
    <tbody>
      { habits.map(habit => 
        <tr>
          <td><HabitOptions name={habit.name} /></td>
          { 
            dates.map(date => 
            <td className="date-cell">
              {
                dashboard.checkDateInDateArray(date, habit.dates)
                ? <div class="habit-achieved">&#10003;</div>
                : <div class="habit-not-achieved"/>
              }
            </td>)}
        </tr>) }
    </tbody>
    )
}

export default Body