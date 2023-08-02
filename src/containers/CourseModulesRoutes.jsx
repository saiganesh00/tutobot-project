import React from 'react'
import { Routes, Route } from 'react-router-dom'
import JavaCourseModules from './JavaCourseModules'
import FsdCourseModules from './FsdCourseModules'
// import LearningHome from './LearningHome'
const CourseModulesRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/learning/*' element={<LearningHome />} /> */}
        <Route path = '/javaModules/*' element={<JavaCourseModules />} />
        <Route path = '/fsdModules/*' element={<FsdCourseModules />} />
      </Routes>
    </div>
  )
}

export default CourseModulesRoutes
