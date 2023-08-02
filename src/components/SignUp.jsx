import React, { useEffect } from 'react';
import './signup.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios'
import { Password } from '@mui/icons-material';
function SignUp({ setModal }) {
  const [userData,updateUserData] = useState({})
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    mobile:""
  });
  useEffect(()=>{
    Axios.get('http://localhost:8000/getUsers').then((res)=>{
      updateUserData(res.data);
      console.log(userData)
    })
  })
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {

    event.preventDefault()
    userData.forEach((ele)=>{
      if(ele.email === formData.email){
        alert('email already exists, login with your email')
        navigate('/')
      }
      
    })
    if(formData.password === formData.confirmPassword && formData.password.length >= 6){

      Axios.post("http://localhost:8000/postUser", formData)
      .then((res) => {
        console.log(res.data);
        setFormData(res.data);
        navigate('/')
        alert('login with your crediantials')
      }).catch((err) => {
        console.log(err);
      })
    }else{
      alert('password not matched or password length must greater than 5')
    }
  }

  return (
    <div className="signUp">
      <div className="modalBackground">
      <div className="modalContainer model1">
        <div className="title">
          <h6>Sign Up</h6>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <input type="text" name='name' onChange={handleChange} placeholder='Enter Name'/>
            <input type="email" name='email' onChange={handleChange} placeholder="Enter Email"/>
            <input type="text" name='mobile' onChange={handleChange} placeholder='Enter Number' />
            <div>
              <input name='java' type="checkbox"/> 
              <label htmlFor="java">Java</label>
              <input name='full stack' type="checkbox" />
              <label htmlFor="full stack">Full Stack</label> 
            </div>
            <input type="password" name='password' onChange={handleChange} placeholder="Enter Password"/>
            <input type="password" name='confirmPassword' onChange={handleChange} placeholder="Confirm Password" />
            <span>Forgot Password ?</span>
        <div className="footer">
          <div className="footer-btns">
            <button onClick={() => {navigate('/')}} id="cancelBtn">Cancel</button>
            <button type='submit'>Continue</button>
            {/* <input type="submit" value="button" /> */}
          </div>
          {/* <h4>Already have an Account ?<Link to='/' on>Sign in</Link> </h4> */}
        </div>
        </form>
        </div>

      </div>
    </div>
    </div>
  );
}

export default SignUp;
