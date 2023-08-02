import React from 'react'
import NavComponent from '../components/NavComponent';
import ModuleBox from '../components/ModuleBox';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JavaModule1 from '../Java Modules/JavaModule1'
import JavaModuleRoutes from '../Java Modules/JavaModuleRoutes';
import { Link } from 'react-router-dom';
const JavaCourseModules = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token'))
          navigate('/')
      })
  return (
    <div>
       <div className="courses">
        <div className="course-top">
          <NavComponent />
        </div>
        <h2 style={{textAlign:"center", height:"18px"}}>Java</h2>
        <div className="course-body">
            
            <div className="left-component">
                <Link className='moduleLinks' to='/javaModules/'><ModuleBox module = "Module 1" /></Link>
                <Link className='moduleLinks' to='/javaModules/module2'><ModuleBox module = "Module 2"/></Link>
                <Link className='moduleLinks' to='/javaModules/module3'><ModuleBox module = "Module 3"/></Link>
                <Link className='moduleLinks' to='/javaModules/module4'><ModuleBox module = "Module 4"/></Link>
                <Link className='moduleLinks' to='/javaModules/module5'><ModuleBox module = "Module 5"/></Link>
                <Link className='moduleLinks' to='/javaModules/module6'><ModuleBox module = "Module 6"/></Link>
                <Link className='moduleLinks' to='/javaModules/module7'><ModuleBox module = "Module 7"/></Link>
            </div>
            <div className="right-component">
                {/* <h2>The Java</h2>
                <br />
                <p></p> <br /> */}
                {/* <JavaModule1 /> */}
                {/* <JavaCourseModules /> */}
                <JavaModuleRoutes />
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet, recusandae provident beatae excepturi reprehenderit, quos voluptatem vitae repudiandae ipsum, rem rerum facere voluptates similique qui. Doloremque fugiat unde ea inventore rem, ut veniam ullam repellat. Quam at excepturi totam cumque, voluptas impedit nam nesciunt quisquam esse cum aspernatur optio.</p> <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet, recusandae provident beatae excepturi reprehenderit, quos voluptatem vitae repudiandae ipsum, rem rerum facere voluptates similique qui. Doloremque fugiat unde ea inventore rem, ut veniam ullam repellat. Quam at excepturi totam cumque, voluptas impedit nam nesciunt quisquam esse cum aspernatur optio.</p> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default JavaCourseModules;
