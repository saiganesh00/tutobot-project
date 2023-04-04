import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
function Modal({ setOpenModal }) {
  return (
  <Routes>
    <Route path='/' element = {<Login setModal = {setOpenModal} />}/>
    <Route path='/signup' element = {<SignUp setModal = {setOpenModal}/>}/>
  </Routes>
  );
}

export default Modal;