import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Courses from '../components/Courses'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import TeamContributors from '../components/TeamContributors'
import './homePage.scss'
import SignUp from '../components/SignUp'
import { Route, Routes } from 'react-router-dom'
import Modal from '../components/Modal'

const HomePage = () => {

  <Routes>
    <Route path='/login' element = {<Modal />}/>
    <Route path='/signup' element = {<SignUp />}/>
  </Routes>

  return (
    <>
      <div className='home' id='home'>
        <Navbar className='navbar-main'/>
        <Home />
        <About />
        <Courses />
        {/* <TeamContributors /> */}
        <Contact />
        {/* <SignUp/> */}
      </div>
      
    </>
  )
}

export default HomePage
