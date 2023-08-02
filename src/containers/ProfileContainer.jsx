import React from 'react'
import './profileContainer.scss'
import NavComponent from '../components/NavComponent'
import Img0 from '../img/sampleImg/image3.jpeg'
import SocialLink from './SocialLink'
import ProfileNavbar from './profileNavbar'
import CodingLinks from './CodingLinks'
import ProfileLinkAccRoutes from './ProfileLinkAccRoutes'
import ProfileRightComponent from './ProfileRightComponent'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
const ProfileContainer = () => {
  // let {state} = useLocation();
  
        
        const navigate= useNavigate();
        // useEffect(()=>{
        //   let state = props.profile
        //     console.log(state)
        //     if(state === null)
        //     navigate('/')
        // })
      //   if(props === null){
      //     console.log('profile',props)
      //     navigate('/')
      // }
      useEffect(()=>{
        if(!localStorage.getItem('token'))
          navigate('/')
      })
  return (
    <div className='profile'>
      <div className="profileNav">
        <NavComponent />
      </div>
      <div className="profileDetails">
          <div className="left-component">
            <img src={Img0} alt="" />
            <span>{localStorage.getItem('name')}</span>
          </div>
          <div className="right-component">
            <ProfileRightComponent/>
          </div>
      </div>
      <div className="profileLinks">
        <div className='profile-headings'>
          <h3>Coding Profiles</h3>
        </div>
        <div className="profile-links">
          <CodingLinks />
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer
