import './ProjectCard.css'
import React from 'react'
import projects from '../../projects.json'

const ProjectCard = () => {
  return (
        <section className='projectCardContainer'>
            <div>
                <h1>projects</h1>
            </div>
            <div className='projectInnerContainer'>
                {projects.map((project, i) => {
                    console.log(project)
                    return (
                        <div className='projectContainer' key={i}>
                        <h3>{project.title}</h3>
                        <img src={project.img} alt="Project pic" height='200px' />
                        <p>{project.description}</p>
                        <p>{project.link}</p>
                        </div>
                    ) 
                })}
            </div>    
        </section>
  )
}

export default ProjectCard