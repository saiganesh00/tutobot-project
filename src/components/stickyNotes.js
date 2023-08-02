import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import NavComponent from './NavComponent'
import './sticky.css'
function StickyNotes() {
  let [data,upData] = useState([])
  let [uData,updateData] = useState('')
    const addNote = () =>{
        axios.post('http://localhost:1020/sticky',{note:uData}).then(res=>{
            updateData('')
     })
    }
    axios.get('http://localhost:1020/sticky').then((res) =>{
            
            upData(res.data);
      })
  return (
    <>
    <div className="course-top">
          <NavComponent />
        </div>
    <div className='bodySticky'>
      <div className='totalSticky'>
        <div className='stickyNotes'>
           
            {
            data.map((e)=>{
                return <div class="note"> {e.note} </div>
            })
            }
        </div>
        <div className='stickyAddPor'>
                <input type='text' id='stiInp' value={uData} className='stickyInp' placeholder='enter your point' onChange={(e)=>{updateData(e.target.value)}}/>
                <button onClick={addNote}>add</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default StickyNotes
