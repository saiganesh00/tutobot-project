import React from 'react'
import './profileModalBox.scss'
import { Link } from 'react-router-dom'
import { useLocation ,useNavigate} from 'react-router-dom'

const ProfileModalBox = ({ setOpenModal }) => {
  const navigate = useNavigate()
  const location = useLocation();
//   const handleLogout = () => {
//       console.log(state.updateUser());
//   }
    const handleLogout = () => {
      localStorage.removeItem('token')
      navigate('/')
    }
  return (
    <div className='profileModal'>
        <div className="modalBackGround">
            <div className="modalBody">
                <ol className='profileUl'>
                    <li><Link to = '/profile'>Profile</Link></li>
                    <li onClick={handleLogout}>Logout</li>
                    <li onClick={() => {setOpenModal(false)}}>Cancel</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default ProfileModalBox
