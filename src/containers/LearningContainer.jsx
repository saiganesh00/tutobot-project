import React from 'react'
import './learningContainer.scss';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';
import IndividualCourse from '../components/IndividualCourse';
import Img0 from '../img/carousel-images/carousel-photo-2.jpg'
import Img1 from '../img/carousel-images/carousel-photo-1.jpg'
import Img2 from '../img/carousel-images/carousel-photo-3.jpg'
import Img3 from '../img/carousel-images/carousel-photo-4.jpg'
import NavComponent from '../components/NavComponent';
import Courses from '../components/Courses';
import CourseName from '../components/CourseName';

const LearningContainer = () => {
  // const location = useLocation();
    const navigate= useNavigate();
    // useEffect(()=>{
    //   let state = props.profile
    //     console.log(state)
    //     if(state === null)
    //     navigate('/')
    // })
    // if(props === null){
    //   console.log('profile',props)
    //   navigate('/')
    // }
    useEffect(()=>{
      if(!localStorage.getItem('token'))
        navigate('/')
    })
    
  return (
    
    <div>
      <div className="learning-container">
        <div className="top">
            <NavComponent />
        </div>
        <div className="your-courses">
            <h2>Your Courses</h2>
            <div>
                <Link to='/fsdModules/*'><IndividualCourse image = {Img0} message = "Full Stack"/></Link>
                <Link to='/javaModules/*'><IndividualCourse image = {Img1} message = "Java"/></Link>
                {/* <Link to='/javaModules/*'><IndividualCourse image = {Img1} message = "Soft Skills"/></Link> */}
            </div>
        </div>
        <div className="other-courses">
            <h2>Explore Other Courses</h2>
            <div>
                <CourseName image = {Img0} text = "Full Stack Development"/>
                <CourseName image = {Img1} text = "Programming Languages"/>
                <CourseName image = {Img2} text = "Data science"/>
            </div>
            <div>
                <CourseName image = {Img2} text = "Andriod Develeopment"/>
                <CourseName image = {Img3} text = "Artificial Intelligence"/>
                <CourseName image = {Img0} text = "Full Stack Development"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LearningContainer
