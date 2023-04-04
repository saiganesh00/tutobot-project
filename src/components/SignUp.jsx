import React from 'react';
import './signup.scss'
import { Link } from 'react-router-dom';
function SignUp({ setModal }) {

  return (
    <div className="signUp">
      <div className="modalBackground">
      <div className="modalContainer model1">
        
        <div className="title">
          <h1>Sign Up</h1>
        </div>
        <div className="body">
          <form action="">
            <input type="text" placeholder='Enter Name'/>
            <input type="email" placeholder="Enter Email"/>
            <input type="password" placeholder="Enter Password"/>
            <input type="password" placeholder="Confirm Password" />
            <span>Forgot Password ?</span>
          </form>
          
        </div>
        <div className="footer">
          <div className="footer-btns">
            <button onClick={() => {setModal(false)}} id="cancelBtn">Cancel</button>
            <button>Continue</button>
          </div>
          <h4>Already have an Account ?<Link to='/' on>Sign in</Link> </h4>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
