import React from 'react'
import '../../../public/css/periods.css'

const PeriodHead = () => {
  return (
    <thead>
      <tr className="periods-title">
        <th>Period</th>
        <th>Active?</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Payment</th>
        <th>Expenditure</th>
      </tr>
    </thead>
  )
}

module.exports = PeriodHead
