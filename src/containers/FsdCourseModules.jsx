import React from 'react'
import { Link } from 'react-router-dom'
import NavComponent from '../components/NavComponent'
import ModuleBox from '../components/ModuleBox'
import FsDModuleRoutes from '../Fsd Moduless/FsDModuleRoutes'
const FsdCourseModules = () => {
  return (
    <div>
      <div className="courses">
        <div className="course-top">
          <NavComponent />
        </div>
        <h2 style={{textAlign:"center", height:"18px"}}>Full Stack Web Development</h2>
        <div className="course-body">
            <div className="left-component">
                <Link to='/fsdModules'><ModuleBox module = "Module 1"/></Link>
                <Link to='/fsdModules/node'><ModuleBox module = "Module 2"/></Link>
                <ModuleBox module = "Module 3"/>
                <ModuleBox module = "Module 4"/>
                {/* <ModuleBox module = "Module 5"/>
                <ModuleBox module = "Module 6"/>
                <ModuleBox module = "Module 7"/>
                <ModuleBox module = "Module 8"/>
                <ModuleBox module = "Module 9"/> */}
            </div>
            <div className="right-component">
                <FsDModuleRoutes />
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet, recusandae provident beatae excepturi reprehenderit, quos voluptatem vitae repudiandae ipsum, rem rerum facere voluptates similique qui. Doloremque fugiat unde ea inventore rem, ut veniam ullam repellat. Quam at excepturi totam cumque, voluptas impedit nam nesciunt quisquam esse cum aspernatur optio.</p> <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet, recusandae provident beatae excepturi reprehenderit, quos voluptatem vitae repudiandae ipsum, rem rerum facere voluptates similique qui. Doloremque fugiat unde ea inventore rem, ut veniam ullam repellat. Quam at excepturi totam cumque, voluptas impedit nam nesciunt quisquam esse cum aspernatur optio.</p> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default FsdCourseModules
