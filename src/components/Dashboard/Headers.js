import React from 'react'
import Table from 'react-bootstrap/Table'

const Headers = ({dates}) => {

  return (
    <thead>
      <th>Habit</th>
      { dates.map(date => <th class="dates">{date}</th>) }
    </thead>
    )
}

export default Headers