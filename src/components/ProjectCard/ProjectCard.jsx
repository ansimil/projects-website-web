import './ProjectCard.css'
import projects from '../../projects.json'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'


const ProjectCard = ({setProjectsInView}) => {
    const { ref, inView, entries } = useInView({
        threshold: 0.1
      })
     useEffect (()=> {
        if (inView){
            setProjectsInView(true)
        }
        else {
            setProjectsInView(false) 
        }
        // eslint-disable-next-line
     }, [inView, setProjectsInView])
     
  return (
        <section ref={ref} id='projects' className='projectCardContainer'>
            <div className='projectsHeader'>
                <img src="./projects-icon.png" alt="projects-icon" width="100px"/>
                <h1>projects</h1>
            </div>
            <div className='projectInnerContainer'>
                {projects.map((project, i) => {
                    return (
                        <div className='projectContainer' key={i}>
                        <h3>{project.title}</h3>
                        <img src={project.img} alt="Project pic" height='200px' />
                        <p>{project.description}</p>
                        <a href={project.link}>Visit site</a>
                        <a href={project.gitLink}>Github</a>
                        </div>
                    ) 
                })}
            </div>    
        </section>
  )
}

export default ProjectCard