import React, { useEffect } from 'react'
import './navComponent.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
import ProfileModalBox from './ProfileModalBox';
import ChatModal from './chatModal/ChatModal'
import { useState } from 'react';
const NavComponent = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [chatModal, setChatModal] = useState(false);
  const [userDetails,setDetail] = useState(null)
  useEffect(()=>{
    setDetail(props.profile)
})
  return (
    <div>
        <div className="nav-component">
            <div className="navbar-left">
                <span ><Link to = '/dashboard'>TutoBot</Link></span>
            </div>
            <div className="navbar-right">
                {/* <span className='menuIcon'><MenuIcon /></span> */}
                <ul className='navUl'>
                  <li><Link to = '/learning' >Learning</Link></li> 
                  <li><Link to = '/projects' >Projects</Link></li>
                  <li onClick={() => {setChatModal(true)}}>Clarity Chat</li>
                  {chatModal && <ChatModal setModal = {setChatModal} />}
                  <li><Link to='/notes'>Stickies</Link></li>
                  {/* <li>Leader Board</li> */}
                  <li><AccountCircleIcon onClick = {() => {setModalOpen(true);}} style={{fontSize: '30'}} /></li>
                  {modalOpen && <ProfileModalBox setOpenModal={setModalOpen} />}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavComponent
