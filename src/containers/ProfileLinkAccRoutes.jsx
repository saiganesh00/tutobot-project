import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SocialLink from './SocialLink'
import CodingLinks from './CodingLinks'
const ProfileLinkAccRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/profile/' element={<CodingLinks/>}/>
        <Route path='/profile/social' element={<SocialLink/>}/>
      </Routes>
    </div>
  )
}

export default ProfileLinkAccRoutes
