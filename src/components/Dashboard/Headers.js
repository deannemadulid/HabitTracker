import React from 'react'
import Table from 'react-bootstrap/Table'

const Headers = ({dates}) => {

  return (
    <thead>
      <tr>
        <th>Habit</th>
        { dates.map(date => <th class="dates">{date}</th>) }
      </tr>
    </thead>
    )
}

export default Headers