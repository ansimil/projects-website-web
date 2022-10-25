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
        // Ref's from useRef needs to have the node assigned to `current`
        ref.current = node;
        // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
        inViewRef(node);
        setProjectsRef(ref)
        console.log(ref)
    },
    [inViewRef],
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