import React from 'react'
import { Routes, Route } from 'react-router-dom'
import JavaModule1 from './JavaModule1'
import JavaModule2 from './JavaModule2'
const JavaModuleRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<JavaModule1 />} />
        <Route path='/module2' element={<JavaModule2 />} />
        {/* <Route path='/module3' element={<JavaModule3 />} />
        <Route path='/module4' element={<JavaModule4 />} />
        <Route path='/module5' element={<JavaModule5 />} />
        <Route path='/module6' element={<JavaModule6 />} />
        <Route path='/module7' element={<JavaModule7 />} /> */}
      </Routes>
    </div>
  )
}

export default JavaModuleRoutes
