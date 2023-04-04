import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom';
const Login = ({ setModal }) => {
  return (
    <div className='login'>
        <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => {setModal(false);}}>
            X
          </button>
        </div>
        <div className="title">
          <h1>Log in</h1>
        </div>
        <div className="body">
          <form action="">
            <input type="email" placeholder="Enter Email"/>
            <input type="password" placeholder="Enter Password"/>
            <span>Forgot Password ?</span>
          </form>
          
        </div>
        <div className="footer">
          <div className="footer-btns">
            <button onClick={() => {setModal(false)}}id="cancelBtn">Cancel</button>
            <button>Continue</button>
          </div>
          <h4>Don't have an Account ? <Link to='/signup'>Sign Up</Link></h4>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login

