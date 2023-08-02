import React from 'react'
import './home.scss'
import { useState } from 'react'
import Modal from './Modal'
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div id='home' style={{marginTop:"50px"}}>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <div className="home-section">
        <div className='home-content'>
            <h1>TutoBot</h1>
            <p> Unlock Your potential with our step by step guidance from our tutorial app</p>
        </div>
        
        <div className="home-button">
            <button type='button' className='modalBtn' onClick={() => {setModalOpen(true)}}>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
