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
      <div><h1>About</h1></div>
      <div></div>
    </section>
  )
}

export default About