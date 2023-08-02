import React, { useEffect, useState } from 'react'
import './login.scss'
import DashBoard from '../containers/DashBoard'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Login = ({ setModal }) => {
  const navigate = useNavigate();
  const [userData,updateUserData] = useState({})
  let [data, setData] = useState({});
  useEffect(()=> {
     Axios.get('http://localhost:8000/getUsers').then((res)=>{
      updateUserData(res.data);
    })
  })
  const handleChange = (event) => {
    // setData({...data, [event.target.name]: event.target.value})
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
    
  }


  // Axios.get('http://localhost:6000/api/users').then((req, res) => {

  // }).catch((err) => {
  //   console.log(err);
  // })

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('login button')
    let e = userData.find((ele)=>{
      return ele.email === data.email ;
    })
    // console.log('login',e)
    if(e === null || e === undefined){
      alert('invalid crediantials')
    }else{
      if(e.password === data.password){
        console.log(e)
        localStorage.setItem('token',e.email)
        localStorage.setItem('name', e.name)
        localStorage.setItem('mobile', e.mobile)
        // console.log(localStorage.getItem('token'))
        navigate('/dashboard')
      }else{
        alert('invalid password')
      }
    }
  }
  return (
    <div className='login'>
        <div className="Background">
      <div className="Container">
        <div className="titleCloseBtn">
          <button onClick={() => {setModal(false);}}>
            X
          </button>
        </div>
        <div className="title">
          <h4>Log in</h4>
        </div>
        <div className="body">
          <form>
            <input type="email" name='email' placeholder="Enter Email" onChange={handleChange}/>
            <input type="password" name='password' placeholder="Enter Password" onChange={handleChange}/>
            <span>Forgot Password ?</span>
            <div className="footer">
          <div className="footer-btns">
            <button onClick={() => {setModal(false)}}id="cancelBtn">Cancel</button>
            <button type='submit' onClick={handleLogin}>Continue</button>
          </div>
          <h6>Don't have an Account ? <Link to='/signup'>Sign Up</Link></h6>
        </div>
          </form>

        </div>

      </div>
    </div>
    </div>
  )
}

export default Login

