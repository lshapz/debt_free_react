import React from 'react'
import '../../../public/css/periods.css'

const PeriodHead = () => {
  return (
    <thead>
      <tr>
        <th>Active?</th>
        <th>Period</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Payment</th>
        <th>Expenditure</th>
        <th>Edit/Delete</th>
      </tr>
    </thead>
  )
}

module.exports = PeriodHead
