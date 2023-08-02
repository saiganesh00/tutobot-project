import React from 'react'
import { useState,useEffect } from 'react';
import './individualCourse.scss'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const IndividualCourse = (props) => {
  const navigate = useNavigate();
  const [course,setCourse] = useState('')
  useEffect(()=>{
    if(props.message === "Full Stack")
      setCourse('/fsdModules')
    else
      setCourse('/javaModules')
  })
    // const handleClick = (message) => {
    //     console.log(message);
    //     if(message === "Full Stack"){
    //       navigate('/fsdModules');
    //     }else{
    //       // navigate('/courses'); 
    //       navigate('/javaModules')
    //     }
           
    // }
  return (
    <div>
      <Link to={course}>
      <div className="individual-course"   >
        <img src= {props.image} alt="" />
        <h3 >Resume {props.message}</h3>
      </div>
      </Link>
    </div>
  )
}

export default IndividualCourse;