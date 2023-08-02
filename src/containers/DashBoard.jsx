import React from 'react'
import { useEffect } from 'react'
import DashBoardNav from '../components/DashBoardNav'
import DashBoardProgress from '../components/DashBoardProgress'
import './dashBoard.scss'
import CourseName from '../components/CourseName'
import IndividualCourse from '../components/IndividualCourse'
import Img0 from '../img/carousel-images/carousel-photo-2.jpg'
import Img1 from '../img/carousel-images/carousel-photo-1.jpg'
import Trends from '../components/Trends'
import NavComponent from '../components/NavComponent'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const DashBoard = () => {
        // let {state} = useLocation();
        // console.log(state)
    // useEffect(()=>{
    //     console.log(state)
    //     if(state === null)
    //     navigate('/')
    // })
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token'))
          navigate('/')
      })

  return (
    <div className='division'>
        <div className='dashboard'>
            <div className='dashBoard-top'>
                <NavComponent />
            </div>
            <div className="dashBoard-body">
                <DashBoardProgress message = "Average"/>
                <DashBoardProgress message = "Java"/>
                <DashBoardProgress message = "Full stack"/>
            </div>
            <div className="dashBoard-rem">
                <h2>Your Journey</h2>
                <div>
                    <IndividualCourse image = {Img0} message = "Full Stack" />
                    <IndividualCourse image = {Img1} message = "Java" />
                </div>
            </div>
            
        </div>
        <div className='trending-component'>
            <Trends course = 'java'/>
            <Trends course = 'Full stack'/>
        </div>
    </div>
  )
}

export default DashBoard
