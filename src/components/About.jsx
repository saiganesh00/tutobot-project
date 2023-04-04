import React, { useRef } from 'react'
import './about.scss'
import Img1 from '../img/carousel-images/carousel-photo-1.jpg'
import Img2 from '../img/carousel-images/carousel-photo-2.jpg'

const About = () => {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()
  
  return (
    
    <div id='about'>
      <div  className='about-section'>
        <h1>About TutoBot</h1>
        <div className="about">
          <div className="about-left-content">
              {/* <img src={Img1} alt="" /> */}
              <img src={Img2} alt="" />
              
          </div>
          <div className="about-right-content">
              <p>Welcome to TutoBot, your go-to destination for high-quality tutorials on a variety of topics. Whether you're a beginner or an expert, we have tutorials that are designed to help you learn new skills and improve your knowledge. We believe that anyone can learn anything with the right guidance and resources, and we're here to provide both.</p>
              <br />
              <p>We offer tutorials on a wide range of topics, including programming, web development, design, marketing, and more. Our tutorials are designed to be easy to follow and informative, so you can learn at your own pace and in your own time. We believe that learning should be fun and engaging, and that's why we use a variety of teaching methods and tools to keep you motivated and engaged.</p>
              <br />
              <p>At TutoBot,  we're committed to providing you with the best possible learning experience. If you have any questions or feedback, please don't hesitate to contact us. We're always happy to hear from our users and we're dedicated to making our tutorials the best they can be.</p>
              <br />
              
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About;
