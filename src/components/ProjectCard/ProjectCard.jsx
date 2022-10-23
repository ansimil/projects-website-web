import './ProjectCard.css'
import projects from '../../projects.json'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'


const ProjectCard = ({setProjectsInView}) => {
    const { ref, inView } = useInView({
        threshold: 0.1
      })
     useEffect (()=> {
        console.log(ref)
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
            <div>
                <h1>projects</h1>
            </div>
            <div className='projectInnerContainer'>
                {projects.map((project, i) => {
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