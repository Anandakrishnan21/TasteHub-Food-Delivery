import React from 'react'
import Countdown from 'react-countdown'

const lastDate = new Date("2023-08-15")

function CountDown() {
  return (
    <div>
      <Countdown date={lastDate} />
    </div>
  )
}

export default CountDown
