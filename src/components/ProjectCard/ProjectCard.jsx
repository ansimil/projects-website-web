import './ProjectCard.css'
import React from 'react'
import projects from '../../projects.json'

const ProjectCard = () => {
  return (
        <div className='projectCardContainer'>
            {projects.map((project, i) => {
                console.log(project)
                return (
                    <div key={i}>
                    <p>{project.title}</p>
                    <p>{project.img}</p>
                    <p>{project.description}</p>
                    </div>
                ) 
            })}
        </div>
  )
}

export default ProjectCard