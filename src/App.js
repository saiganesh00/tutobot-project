import React from 'react'
import ContainerRoutes from './containers/ContainerRoutes'
import { Routes, Route, Link, Switch , BrowserRouter } from 'react-router-dom'

import ProfileContainer from './containers/ProfileContainer'
import ChatContainer from './containers/ChatContainer'

const App = () => {

  return (
    <BrowserRouter>
      <div>
        {/* <ChatContainer /> */}
        <ContainerRoutes />
        {/* <ProfileContainer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App

