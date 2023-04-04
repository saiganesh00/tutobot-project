import React from 'react'
import './contact.scss'
const Contact = () => {
  return (
    <div id='contact'>
      <div className="contact-section">
        <h3>Contact Us</h3>
        <div className="contact">
            <div className="contact-left">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15284.996113267976!2d81.81150429999998!3d16.714421849999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680521660950!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-right">
                <form action="">
                    <input type="text" placeholder='Enter name' />
                    <input type="email" placeholder='Enter email' />
                    <input type="phone" placeholder='Enter Mobile Number'/>
                    <textarea name="" id="" cols="46" rows="10" placeholder='Enter Your Query'>
                        
                    </textarea>
                    <button type='submit'>Submit </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
