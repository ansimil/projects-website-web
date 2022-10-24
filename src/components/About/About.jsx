import './About.css'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'



const About = ({setAboutInView}) => {
  const { ref, inView } = useInView({
    threshold: 0.1
  })
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
    <section ref={ref} id="about" className='aboutContainer'>
      <div className='aboutLeftDiv'>
        <img className='aboutIcon' src="./about-icon.png" alt="hello" />
        <h1 className='aboutMeHeader'>about</h1>
      </div>
      <div className='aboutRightDiv'>
        <h1>Hi, I'm Andrew.</h1>
        <p>I recently completed the full-stack web dev bootcamp at Ironhack in Berlin and am now looking to move into the field. I wanted to share some of my projects with you.</p>
        <p>Take a look around.</p>
      </div>
    </section>
  )
}

export default About