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
        <h1>Hi, I'm Andrew</h1>
        <p>I'm a full-stack web developer from Australia. I have a passion for technology, music and creating great user experiences.</p>
        <p>Take a look around.</p>
        <img className='aboutDownArrow' onClick={()=>{scrollToSection(projectsRef)}} src="./downarrow-icon2.png" alt="hello" width='50px' />
      </div>
    </section>
  )
}

export default About