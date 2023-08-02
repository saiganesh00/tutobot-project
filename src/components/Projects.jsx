import React from 'react'
import CourseName from './CourseName'
import './projects.scss'
import Img0 from '../img/sampleImg/image3.jpeg'
import Img1 from '../img/sampleImg/image4.jpeg'
import Img2 from '../img/sampleImg/image5.jpeg'
import Img3 from '../img/sampleImg/image6.jpeg'
import Img4 from '../img/sampleImg/image7.jpeg'
import Img5 from '../img/sampleImg/image8.webp'
import Img6 from '../img/sampleImg/image9.jpeg'
const Projects = () => {
  return (
    <div>
        <div className="levels">
            <div className="beginner-level">
                <h3>Beginner Level</h3>
                <div>
                    <CourseName image = {Img0} text = "Frontend Landing page project" />
                    <CourseName image = {Img1} text = "Frontend Project" />
                    <CourseName image = {Img2} text = "Layouts project" />
                </div>
            </div>
            <div className="intermediate-level">
            <h3>Intermediate Level</h3>
                <div>
                    <CourseName image = {Img3} text = "" />
                    <CourseName image = {Img4} text = "Android Development" />
                    <CourseName image = {Img5} text = "Cloud Computing" />
                </div>
            </div>
            <div className="advanced-level">
            <h3>Advanced Level</h3>
                <div>
                    <CourseName image = {Img1} text = "Full Stack Development" />
                    <CourseName image = {Img0} text = "Data Science" />
                    <CourseName image = {Img2} text = "Programming Languages" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects