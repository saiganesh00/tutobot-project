import React from 'react'
import './socialLink.scss'
const CodingLinks = () => {
  return (
    <div>
      <div className="socialLinks">
        <form action="">
            <table>
            <tr>
                <td>
                    <label>HackerRank</label>
                </td>
                <td>
                    <input type="text" placeholder='Link to Profile'/>  
                </td>
            </tr>
            <tr>
                <td><label>CodeChef</label></td>
                <td><input type="text" placeholder='Link to Profile'/></td>
            </tr>
            
            <tr>
                <td><label>GeeksForGeeks</label></td>
                <td><input type="text" placeholder='Link to Profile'/></td>
            </tr>
            <tr>
                <td><label>LeetCode</label></td>
                <td><input type="text" placeholder='Link to Profile'/></td>
            </tr>
            </table>
        </form>
      </div>
      </div>
  )
}

export default CodingLinks
