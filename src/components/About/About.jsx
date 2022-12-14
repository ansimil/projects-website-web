import './About.css'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useCallback } from 'react'



const About = ({setAboutInView, projectsRef, setAboutRef}) => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1
  })

  const setRefs = useCallback(
    (node) => {
        ref.current = node;
        inViewRef(node);
        setAboutRef(ref)
    },
    // eslint-disable-next-line
    [inViewRef],
    );

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })
  }

 useEffect (()=> {
    if (inView){
        setAboutInView(true)
    }
    else {
        setAboutInView(false) 
    }
    // eslint-disable-next-line
 }, [inView, setAboutInView])

  return (
    <section ref={setRefs} id="about" className='aboutContainer'>
      <div className='aboutLeftDiv'>
        <img className='aboutIcon' src="./about-icon.png" alt="hello" />
        <h1 className='aboutMeHeader'>about</h1>
      </div>
      <div className='aboutRightDiv'>
        <h1>Hi, I'm Andrew.</h1>
        <p>I recently completed the full-stack web dev bootcamp at Ironhack in Berlin and am now looking to move into the field. I wanted to share some of my projects with you.</p>
        <p>Take a look around.</p>
        <img className='aboutDownArrow' onClick={()=>{scrollToSection(projectsRef)}} src="./downarrow-icon2.png" alt="hello" width='50px' />
      </div>
    </section>
  )
}

export default About