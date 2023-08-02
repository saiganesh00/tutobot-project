import React from 'react'
import './moduleBox.scss'
const ModuleBox = (props) => {
  return (
    <div>
      <div className="box">
        <h3>{props.module}</h3>
      </div>
    </div>
  )
}

export default ModuleBox
