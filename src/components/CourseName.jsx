import React from 'react'
import './courseName.scss'
const CourseName = (props) => {
  return (
    <div>
      <div className="course-name">
        <img src= {props.image} alt="" />
        <h3>{props.text}</h3>
      </div>
    </div>
  )
}

export default CourseName;
