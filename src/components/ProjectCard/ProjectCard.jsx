import './ProjectCard.css'
import projects from '../../projects.json'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useCallback } from 'react'


const ProjectCard = ({setProjectsInView, setProjectsRef}) => {
    const ref = useRef();
    const { ref: inViewRef, inView } = useInView({
        threshold: 0.1
      })
    const setRefs = useCallback(
    (node) => {
        ref.current = node;
        inViewRef(node);
        setProjectsRef(ref)
    },
    [inViewRef, setProjectsRef],
    );

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
        <section ref={setRefs} id='projects' className='projectCardContainer'>
            <div className='projectsHeader'>
                <img src="./projects-icon.png" alt="projects-icon" width="100px"/>
                <h1>projects</h1>
            </div>
            <div className='projectInnerContainer'>
                {projects.map((project, i) => {
                    return (
                        <div className='projectContainer' key={i}>
                            <h2>{project.title}</h2>
                            <img src={project.img} alt="Project pic" height='200px' />
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">Visit site</a>
                            <a href={project.gitLink} target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                    ) 
                })}
            </div>    
        </section>
  )
}

export default ProjectCard