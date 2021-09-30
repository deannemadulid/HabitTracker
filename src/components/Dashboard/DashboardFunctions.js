import React from 'react'
import Table from 'react-bootstrap/Table'

const today = new Date()
const yesterday = today.setDate(today.getDate() - 1)

const habits= [
  ["habit1", [today]],
  ["habit2", [yesterday, today]]
]

const past7Days = () => {
  let daysArray = []

  for (let i = 7; i > 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i);
    const month = date.toLocaleString('default', { month: 'short' });
    daysArray.push(month + " " + date.getDate())
  }

  return daysArray
}

export default { past7Days }