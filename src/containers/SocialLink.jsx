import React from 'react'
import './socialLink.scss'
const SocialLink = () => {
  return (
    <div>
      <div className="socialLinks">
        <form action="">
            <table>
                <tr>
                    <td>
                        <label>LinkedIn</label>
                    </td>
                    <td>
                        <input type="text" placeholder='Link to Profile'/>  
                    </td>
                </tr>
            <tr>
                <td><label>Twitter</label></td>
                <td><input type="text" placeholder='Link to Profile'/></td>
            </tr>
            
            <tr>
                <td><label>Portfolio</label></td>
                <td><input type="text" placeholder='Link to Profile'/></td>
            </tr>
            <tr>
                <td><label>Instagram</label></td>
                <td><input type="text" placeholder='Link to Profile'/></td>
            </tr>
            </table>
        </form>
      </div>
    </div>
  )
}

export default SocialLink
