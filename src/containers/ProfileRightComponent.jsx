import React from 'react'
import './ProfileRightCompo.scss'
const ProfileRightComponent = () => {
  return (
    <div>
      <table className='pTable'>
        
        <tr>
            <th>Name</th>
            <td>{localStorage.getItem('name')}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>{localStorage.getItem('token')}</td>
        </tr>
        <tr>
            <th>Mobile no</th>
            <td>{localStorage.getItem('mobile')}</td>
        </tr>
        <tr>
            <th>Courses </th>
            <td> Java , Full Stack </td>
        </tr>
      </table>
    </div>
  )
}

export default ProfileRightComponent
