import React from 'react'
import CourseName from './CourseName'
import Img0 from '../img/carousel-images/carousel-photo-2.jpg'
import Img1 from '../img/carousel-images/carousel-photo-1.jpg'
import Img2 from '../img/carousel-images/carousel-photo-3.jpg'
import Img3 from '../img/carousel-images/carousel-photo-4.jpg'
import './courses.scss'

const Courses = () => {
  return (
    <div id='course'>
      <div className="courses-section">
        <h1>Courses</h1>
        <p>Thank you for choosing TutoBot  as your learning destination. We're excited  to help you on your learning journey!</p>
        
        <div className="course">
            <CourseName image = {Img1} text = "Full Stack Development" />
            <CourseName image = {Img0} text = "Data Science" />
            <CourseName image = {Img2} text = "Programming Languages" />
        </div>
        <div className="course">
            <CourseName image = {Img3} text = "Artificial Intelligence" />
            <CourseName image = {Img2} text = "Android Development" />
            <CourseName image = {Img1} text = "Cloud Computing" />
        </div>
      </div>
    </div>
  )
}

export default Courses
