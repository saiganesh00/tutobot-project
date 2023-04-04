import React from 'react'
import HomePage from './containers/HomePage'
import { Routes, Route, Link, Switch , BrowserRouter } from 'react-router-dom'
import Modal from './components/Modal'
import SignUp from './components/SignUp'
const App = () => {

  

  return (
    <BrowserRouter>
      <div>
        <HomePage />
      </div>
    </BrowserRouter>
  )
}

export default App

