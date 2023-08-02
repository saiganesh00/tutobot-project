import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Html from './Html'
import NodeModule from './Node'
const FsDModuleRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Html />} />
        <Route path='/node' element={<NodeModule />} />
      </Routes>
    </div>
  )
}

export default FsDModuleRoutes
