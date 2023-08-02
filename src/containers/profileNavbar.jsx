import React from 'react'
import { Link } from 'react-router-dom'
const ProfileNavbar = () => {
  return (
    <div>
      <div className="codSocLink">
        <Link to='/profile/code' className="coding-profiles">
              <h3>Coding Profiles</h3>
        </Link>
        <Link to='/profile/social' className="social-profiles">
            <h3>Social Profiles</h3>
        </Link>
      </div>
    </div>
  )
}

export default ProfileNavbar
