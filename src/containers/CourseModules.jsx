import React from 'react'
import './courseModules.scss'
import NavComponent from '../components/NavComponent'
import Sidebar from '../components/Sidebar'
import ModuleBox from '../components/ModuleBox'
const CourseModules = () => {
  return (
    <div>
      <div className="courses">
        <div className="course-top">
          <NavComponent />
        </div>
        <div className="course-body">
            <div className="left-component">
                <ModuleBox module = "Module 1"/>
                <ModuleBox module = "Module 2"/>
                <ModuleBox module = "Module 3"/>
                <ModuleBox module = "Module 4"/>
                <ModuleBox module = "Module 5"/>
                <ModuleBox module = "Module 6"/>
                <ModuleBox module = "Module 7"/>
                <ModuleBox module = "Module 8"/>
                <ModuleBox module = "Module 9"/>
            </div>
            <div className="right-component">
                <h2>The Html</h2>
                <br />
                <p></p> <br />
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet, recusandae provident beatae excepturi reprehenderit, quos voluptatem vitae repudiandae ipsum, rem rerum facere voluptates similique qui. Doloremque fugiat unde ea inventore rem, ut veniam ullam repellat. Quam at excepturi totam cumque, voluptas impedit nam nesciunt quisquam esse cum aspernatur optio.</p> <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet, recusandae provident beatae excepturi reprehenderit, quos voluptatem vitae repudiandae ipsum, rem rerum facere voluptates similique qui. Doloremque fugiat unde ea inventore rem, ut veniam ullam repellat. Quam at excepturi totam cumque, voluptas impedit nam nesciunt quisquam esse cum aspernatur optio.</p> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default CourseModules;
