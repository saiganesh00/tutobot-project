import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FsdProjects from './FsdProjects'
import JavaProjects from './JavaProjects'

const ProjectRoutes = () => {
  return (
    <div>
      <Routes>
            <Route path="/fsdprojects" element={<FsdProjects/>}/>
            <Route path="/javaprojects" element={<JavaProjects/>}/>
        </Routes>
    </div>
  )
}

export default ProjectRoutes
