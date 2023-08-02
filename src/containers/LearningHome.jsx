import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate,useLocation, Link } from 'react-router-dom';
import IndividualCourse from '../components/IndividualCourse';
import Img0 from '../img/carousel-images/carousel-photo-2.jpg'
import Img1 from '../img/carousel-images/carousel-photo-1.jpg'
import Img2 from '../img/carousel-images/carousel-photo-3.jpg'
import Img3 from '../img/carousel-images/carousel-photo-4.jpg'
import NavComponent from '../components/NavComponent';
import Courses from '../components/Courses';
import CourseName from '../components/CourseName';
import CourseModulesRoutes from './CourseModulesRoutes';

const LearningHome = () => {
  return (
    <div>
        <div className="your-courses">
            <h2>Your Courses</h2>
            <div>
                <Link to='/fsdModules'>
                  <IndividualCourse image = {Img0} message = "Full Stack"/>
                </Link>
                <Link to='/javaModules'>
                  <IndividualCourse image = {Img1} message = "Java"/>
                </Link>
            </div>
        </div>
        {/* <div className="other-courses">
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
            </div> */}
            {/* <CourseModulesRoutes /> */}
        {/* </div> */}
    </div>
  )
}

export default LearningHome
