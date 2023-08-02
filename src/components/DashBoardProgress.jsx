import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const DashBoardProgress = (props) => {
    const percentage = 60;
  return (
    <div style={{ width: 180, height: 50, alignItems: 'center' }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
      {/* <h3>{props.message}</h3> */}
    </div>
  )
}

export default DashBoardProgress
