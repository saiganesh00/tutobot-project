import React from 'react'
import './projectsContainer.scss'
import ProjectRoutes from '../components/ProjectRoutes'
import { Link } from 'react-router-dom'
import NavComponent from '../components/NavComponent'
import { useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
const ProjectsContainer = () => {
    // window.history.pushState(cleanStateForHistory(state), "", '/');
    // let {state} = useLocation();
    const navigate= useNavigate();
    // useEffect(()=>{
    //   let state = props.profile
    //     console.log(state)
    //     if(state === null)
    //     navigate('/')
    // })
    // if(props === null){
    //     console.log('profile',props)
    //     navigate('/')
    // }
    useEffect(()=>{
        if(!localStorage.getItem('token'))
          navigate('/')
      })
  return (
    <div className='projects'>
        <NavComponent />
        <div className="projects-section">
            <h2>Guided Projects</h2>
            <div className="tracks">
                <div className="track-1">
                    <h4><Link to = '/projects/fsdprojects'>Full Stack</Link></h4>
                </div>
                <div className="track-2">
                    <h4><Link to = '/projects/javaprojects'>Java</Link></h4>
                </div>
            </div>
            <div>
                <ProjectRoutes />
                
            </div>
        </div>
    </div>
  )
}

export default ProjectsContainer
