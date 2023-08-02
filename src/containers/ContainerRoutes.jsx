import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseModules from './CourseModules'
import DashBoard from '../containers/DashBoard'
import HomePage from './HomePage'
import LearningContainer from './LearningContainer'
import ProjectsContainer from './ProjectsContainer'
import ChatContainer from './ChatContainer'
import ProfileContainer from './ProfileContainer'
import StickyNotes from '../components/stickyNotes'
// import { useEffect } from 'react'
// import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import JavaCourseModules from './JavaCourseModules'
import FsdCourseModules from './FsdCourseModules'
const ContainerRoutes = () => {
  // const[details,setDetails] = useState(null)
  // const navigate= useNavigate();
  // let  {state} = useLocation()
    // useEffect(()=>{
    //     setDetails(state)
    //     console.log(details)
    //     if(details === null)
    //     navigate('/')
    // })
    // setDetails(state);
    // console.log(state,'state cont')
    // if(state === null){
    //   console.log('cRoute',state)
    //   navigate('/')
    // }
  
  return (
    <div>
      <Routes>
        <Route path='*'  element={<HomePage  />}/>
        <Route path='/dashboard' element={<DashBoard />}/>
        <Route path='/learning' element={<LearningContainer />}/>
        <Route path = '/courses' element={<CourseModules />} />
        <Route path = '/projects/*' element={<ProjectsContainer />} />
        <Route path = '/javaModules/*' element={<JavaCourseModules />} />
        <Route path = '/fsdModules/*' element={<FsdCourseModules />} />
        {/* <Route path = '/chat' element={<ChatContainer />} /> */}
        <Route path = '/notes' element={<StickyNotes />} />
        <Route path = '/profile/*' element={<ProfileContainer />} />
      </Routes>
    </div>
  )
}

export default ContainerRoutes;
